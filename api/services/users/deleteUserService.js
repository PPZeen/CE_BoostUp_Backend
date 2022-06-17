const usersModel = require('../../models/userModel');

module.exports = async function deleteUserService(id) {
    try {
        await usersModel.deleteOne({_id: id});
        return {deleted: "user deleted!"};
    } catch (err) {
        return {Error: "delete user Error!"};
    }
};