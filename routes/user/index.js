const express = require('express');
const userRouter = express.Router();
const userController = require('../../controllers/user');

userRouter.get('/get_users', userController.get_users);

module.exports = userRouter;