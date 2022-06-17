const submitModel = require('../../models/submitModel');

module.exports = async function getSubmitService(userIdData, questionIdData) {
    try {
        const getSubmit = await submitModel.findOne({
            userId: userIdData,
            questionId: questionIdData
        }).select('-__v -_id -oldScore');
        if (getSubmit == null) return {message: 'Not found submit...'};
        return getSubmit;
    } catch(err) {
        return {message: 'Error get submit in service.'};
    }
};