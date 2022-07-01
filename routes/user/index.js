const express = require('express');
const userRouter = express.Router();
const userController = require('../../controllers/user');
const Authentication = require('../../middleware/Authentication');

userRouter.use(Authentication.verifyToken);
userRouter.get('/get_users', userController.get_users);

module.exports = userRouter;