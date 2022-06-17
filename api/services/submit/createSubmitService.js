const submitModel = require('../../models/submitModel');
const updateSubmitService = require('./updateSubmitService');
const { getScoreUserService, getFinishedUserService, updateUserService} = require('../users');

module.exports = async function createSubmitService(submitData) {
    try {
        const query = await submitModel.findOne(
            {
                userId: submitData.userId,
                questionId: submitData.questionId
            }
        );
        if(query == null) {
            try {
                const newSubmit = new submitModel(submitData);
                await newSubmit.save();
                date = new Date();
                await updateSubmitService(newSubmit._id, {createAt: date, updateAt: date});
                
                if (submitData.status) {
                    const scoreUser = await getScoreUserService(submitData.userId);
                    const finishedUser = await getFinishedUserService(submitData.userId);

                    await updateSubmitService(newSubmit._id, {oldScore: submitData.score});

                    await updateUserService(
                        submitData.userId,
                        {score: (scoreUser + submitData.score), finished: (finishedUser + 1)}
                    );
                }
                return {created: `submit created!`}
            } catch (err) {
                return {Error: 'create submit Error!'}
            }
        }
        else {
            await updateSubmitService(query._id, submitData);
            await updateSubmitService(query._id, {updateAt: new Date()});
            if (query.status) {
                await updateSubmitService(query._id, {oldScore: query.score});
                const scoreUser = await getScoreUserService(submitData.userId);
                if(submitData.status) {
                    await updateUserService(submitData.userId, {score: scoreUser - query.score + submitData.score});
                    return {message: `User ID ${submitData.userId} submited successfully.`};
                }
                const finishedUser = await getFinishedUserService(submitData.userId);
                await updateUserService(submitData.userId, {score: scoreUser - query.score, finished: finishedUser - 1});
                return {message: `User ID ${submitData.userId} submited successfully.`};
            }
            await updateSubmitService(query._id, {oldScore: query.score});
            if (submitData.status) {
                const scoreUser = await getScoreUserService(submitData.userId);
                const finishedUser = await getFinishedUserService(submitData.userId);
                await updateUserService(
                    submitData.userId, 
                    {score: scoreUser + submitData.score, finished: finishedUser + 1}
                );
                return {message: `User ID ${submitData.userId} submited successfully.`};
            }
            return {message: `User ID ${submitData.userId} submited successfully.`};
        }
    }
    catch (err) {
        return {Error: 'submit error.'};
    }
};