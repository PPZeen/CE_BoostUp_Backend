const { createUserService } = require('../../services/users');

module.exports = async function creatUsersController(req, res) {
    try {
        const creatUser = await createUserService(req.body);
        return res.send(creatUser);
    } catch(err) {
        return res.send({massage: 'Error create users'});
    }
};