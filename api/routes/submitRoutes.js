const submitBuilder = require('../controllers/submitController');

module.exports = app => {
    app
        .route('/submits')
        .post();
};