const submitBuilder = require('../controllers/questionController');

module.exports = app => {
    app
        .route('/questions')
        .post();
};