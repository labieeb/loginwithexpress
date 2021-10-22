const express = require('express');
var router = express.Router();
var authRoute = require('./authentication');

var isAuthenticate = function(req, res, next){
    if(req.session.email) {
        next();
    }else{
        res.sendStatus(403);
    }
}
router.get('/home',  isAuthenticate, (req, res)=>{
    res.render('home');

})

router.use('/auth', authRoute);
module.exports = router;


