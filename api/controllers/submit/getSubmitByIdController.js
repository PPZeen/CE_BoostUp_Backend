const { getSubmitByIdService } = require('../../services/submit');

module.exports = async function getSubmitByIdController(req, res) {
    try {
        const getSubmit = await getSubmitByIdService(req.params.id);
        return res.send(getSubmit);
    } catch(err) {
        return res.send({massage: `Error get submit id ${req.params.id} in controller.`});
    }  
};