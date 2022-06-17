const { getSubmitService } = require('../../services/submit');

module.exports = async function getSubmitController(req, res) {
    try {
        const getSubmit = await getSubmitService(req.params.userId, req.params.questionId);
        return res.send(getSubmit);
    } catch(err) {
        return res.send({message: `Error get submit in controller.`});
    }  
};