const { getTopSubmitService } = require('../../services/submit');

module.exports = async function getTopSubmitController(req, res) {
    try {
        const getSubmit = await getTopSubmitService(req.params.questionId);
        return res.send(getSubmit);
    } catch(err) {
        return res.send({message: `Error get submit questionId ${req.params.questionId} in controller.`});
    }  
};