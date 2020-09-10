const db = require('../model/index');

const getloginPage = (req,res) => {
    res.render('loginPage',{})
};

module.exports = {
    getloginPage
};