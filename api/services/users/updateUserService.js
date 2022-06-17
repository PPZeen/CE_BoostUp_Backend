const usersModel = require('../../models/userModel');

module.exports = async function updateUserService(id, data) {
    try {
        await usersModel.findByIdAndUpdate({_id: id}, data, {new: true});
        return {updated: "user updated!"};
    } catch (err) {
        return {Error: "update user Error in userService!"};
    };
};