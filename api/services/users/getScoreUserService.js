const usersModel = require('../../models/userModel');

module.exports = async function getScoreUserService(id) {
    try {
        const getUser = await usersModel.findById(id).select('score -_id');
        return getUser.score;
    } catch(err) {
        return res.send({massage: `Error get score user id ${id} in service`});
    }
};