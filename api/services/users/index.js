const getUserService = require('./getUserService');
const getUsersService = require('./getUsersService');
const updateUserService = require('./updateUserService');
const createUserService = require('./createUserService');
const deleteUserService = require('./deleteUserService');
const getScoreUserService = require('./getScoreUserService');
const getFinishedUserService = require('./getFinishedUserService');

module.exports = {
    getUserService,
    getUsersService, 
    updateUserService,
    deleteUserService,
    createUserService,
    getScoreUserService,
    getFinishedUserService
};