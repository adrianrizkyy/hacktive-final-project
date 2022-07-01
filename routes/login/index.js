const express = require('express');
const loginRouter = express.Router();
const loginController = require('../../controllers/login');

loginRouter.post('/do_login', loginController.do_login);

module.exports = loginRouter;