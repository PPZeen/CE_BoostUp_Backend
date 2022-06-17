const usersModel = require('../../models/userModel');

module.exports = async function getUserService(id) {
    try {
        const getUser = await usersModel.findById(id).select('-_id -password');
        return getUser;
    } catch(err) {
        return res.send({massage: `Error get user id ${id} in service`});
    }
};