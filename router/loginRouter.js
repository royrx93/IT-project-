const express = require('express');
const loginRouter = express.Router();
const loginController = require('../Controller/loginController');

loginRouter.get('/',(req,res) => loginController.getloginPage(req,res));

module.exports = loginRouter;