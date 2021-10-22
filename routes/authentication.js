const express = require('express');
var router = express.Router();
var {createUser, verifyUser} = require('../controller/authentication');
router.get('/signin',(req, res)=>{
    res.render('signin',{
        message:''
    })
})

router.get('/signup', (req, res)=>{
    res.render('signup', {
        message:''
    })
})

router.post('/signup', (req, res)=>{
    
    createUser(req.body)
        .then(()=>{
            res.redirect('/auth/signin');
        })
        .catch((err)=>{
            res.render('signup',{
                message:err.toString()
            })
        })
})

router.post('/signin', (req, res)=>{
    verifyUser(req.body, (err, user)=>{
        if(err){
            res.render('signin', {
                message : err.toString()
            })
        }else{
            req.session._id = user._id;
            req.session.email = user.email;
            res.redirect('/home');
        }
    })
        
})

router.get('/signout', (req, res)=>{
    req.session.destroy();
    res.clearCookie('connect.sid');
    res.redirect('/auth/signin');
})
module.exports = router;