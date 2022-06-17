const usersModel = require('../../models/userModel');

module.exports = async function getUsersService() {
    try {
        const getUsers = await usersModel.find().select('-_id -password');
        return getUsers;
    } catch(err) {
        return res.send({massage: 'Error get users'});
    }
};