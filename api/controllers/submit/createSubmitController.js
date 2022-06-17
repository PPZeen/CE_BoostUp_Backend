const { createSubmitService } = require('../../services/submit');

module.exports = async function creatSubmitController(req, res) {
    try {
        const creatSubmit = await createSubmitService(req.body);
        return res.send(creatSubmit);
    } catch(err) {
        return res.send({massage: 'Error create Submits'});
    }
};