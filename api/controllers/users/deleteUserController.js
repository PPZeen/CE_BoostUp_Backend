const { deleteUserService } = require('../../services/users');

module.exports = async function deleteUserController(req, res) {
    try {
        const query = await deleteUserService(req.params.userId);
        return res.send(query);
    } catch(err) {
        return res.status(400).json({message: "delete user Error"});
    }
};