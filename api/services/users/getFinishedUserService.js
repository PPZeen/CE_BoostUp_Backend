const usersModel = require('../../models/userModel');

module.exports = async function getFinishedUserService(id) {
    try {
        const getUser = await usersModel.findById(id).select('finished -_id');
        return getUser.finished;
    } catch(err) {
        return res.send({massage: `Error get finished user id ${id} in service`});
    }
};