const { getUsersService } = require('../../services/users');

module.exports = async function getUsersController(req, res) {
    try {
        const getUsers = await getUsersService();
        return res.send(getUsers);
    } catch(err) {
        return res.send({massage: 'Error get users'});
    }
}