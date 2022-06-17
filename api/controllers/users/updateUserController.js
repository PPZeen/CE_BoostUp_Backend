const { updateUserService } = require('../../services/users');

module.exports = async function updateUserController(req, res) {
    try {
        const query = await updateUserService(req.params.userId, req.body);
        return res.send(query);
    } catch(err) {
        return res.status(400).json({message: "update user Error"});
    }
};