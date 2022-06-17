const submitModel = require('../../models/submitModel');

module.exports = async function getSubmitByIdService(id) {
    try {
        const getSubmit = await submitModel.findById(id).select('-__v -_id -oldScore');
        return getSubmit;
    } catch(err) {
        return res.send({massage: 'Error get submit'});
    }
};