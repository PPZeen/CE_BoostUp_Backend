const submitModel = require('../../models/submitModel');

module.exports = async function getTopSubmitService(questionIdData) {
    try {
        const getSubmits = await submitModel.find({
            questionId: questionIdData,
            status: true
        }).select('-__v -_id -oldScore').sort({ updateAt: 1 } ).limit(5);

        if (getSubmits == null) return {message: 'Not found submits.'};
        return getSubmits;
    } catch(err) {
        return {message: 'Error get submit in service.'};
    }
};