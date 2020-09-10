const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

//import database
require("./model");
const mainPageRouter = require("./router/mainPageRouter");
const loginRouter = require("./router/loginRouter");

//start static resource service
const app = express();
app.use('/www',express.static('public'));


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(express.json());

app.use('/', mainPageRouter);
app.use('/login',loginRouter);


//listen to the serve
app.listen(3000, function () {
    console.log('app is running at port 3000')
});

module.exports = app;