const express = require('express');
const userRouter = express.Router();
const userController = require('../../controllers/user');
const Authentication = require('../../middleware/Authentication');

userRouter.use(Authentication.verifyToken);
userRouter.get('/get_users', userController.get_users);
userRouter.post('/create_user', userController.create_user);
userRouter.put('/update_password', userController.update_password);
userRouter.delete('/delete_user/:id', userController.delete_user);

module.exports = userRouter;