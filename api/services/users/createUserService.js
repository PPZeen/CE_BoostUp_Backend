const usersModel = require('../../models/userModel');

module.exports = async function createUserService(data) {
    try {
        const newUser = new usersModel(data);
        await newUser.save();
        return {created: `user created!`}
    } catch (err) {
        return {Error: "create user Error!"}
    };
};