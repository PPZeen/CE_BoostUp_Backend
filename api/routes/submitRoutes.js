const express = require('express');
const router = express.Router();
const submitController = require('../controllers/submit');

router.post('/submit', submitController.createSubmitController);
router.get('/submit/id', submitController.getSubmitByIdController);
router.get('/submit/question/:questionId', submitController.getTopSubmitController);
router.get('/submit/:questionId/:userId', submitController.getSubmitController);

module.exports = router;