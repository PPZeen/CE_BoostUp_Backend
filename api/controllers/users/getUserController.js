const { getUserService } = require('../../services/users');

module.exports = async function getUserController(req, res) {
    try {
        const getUser = await getUserService(req.params.userId);
        return res.send(getUser);
    } catch(err) {
        return res.send({massage: `Error get user id ${req.params.userId} in controller`});
    }
};