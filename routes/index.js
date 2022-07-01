const express = require('express');
const route = express.Router();
const loginRouter = require('./login');
const userRouter = require('./user');
const reflectionRouter = require('./reflection');
const registerController = require('../controllers/register');

route.use('/login', loginRouter);
route.use('/user', userRouter);
route.use('/reflection', reflectionRouter);
route.post('/register', registerController.register);

module.exports = route;
