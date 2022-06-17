const submitModel = require('../../models/submitModel');

module.exports = async function updateSubmitService(id, data) {
    try {
        await submitModel.findByIdAndUpdate({_id: id}, data, {new: true});
        return {updated: "submit updated!"};
    } catch (err) {
        return {Error: "update submit Error!"};
    };
};