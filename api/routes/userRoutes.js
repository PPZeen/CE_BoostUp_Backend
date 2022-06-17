const express = require('express');
const router = express.Router();
const userController = require('../controllers/users');

router.get('/users', userController.getUsersController);
router.post('/users/create', userController.createUserController);
router.get('/users/:userId', userController.getUserController);
router.put('/users/update/:userId', userController.updateUserController);
router.delete('/users/delete/:userId', userController.deleteUserController);

module.exports = router;