var express=require('express');
var router=express.Router();
var User=require('../models/schema');
var passport=require('passport');
var passportConfig=require('../config/passport-config');
var expressValidator=require('express-validator');


router.get('/register',function(req,res){
	res.render('register');
});

router.get('/main',function(req,res){
	res.render('main');
});

router.get('/login',function(req,res){
	res.render('login');
});

router.get('/profile',function(req,res){
	res.render('profile',{user:req.user});
});

router.post('/register',function(req,res){
	var username,password;
	var userData={
		username:req.body.username,
		password:req.body.password
	};
req.checkBody('username','Name is required').notEmpty();
req.checkBody('password','Password invalid').notEmpty();
req.checkBody('password','Password length less than 4.').isLength({min:4});

var errors=req.validationErrors();

if(errors){
	console.log('error');
	res.render('register');
}
else{
	console.log('Validation successfull.')

	
	User.create(userData).then(function(user){
		//res.send('Successfully logged in.');
		res.render('successRegister');
	});
};
});

router.post('/login',
	passport.authenticate('local',{successRedirect:'/users/profile',failureRedirect:'/users/login'}));


// GET for logout logout
router.get('/logout', function (req, res, next) {
  if (req.session) {
    // delete session object
    req.session.destroy(function (err) {
      if (err) {
        return next(err);
      } else {
        return res.redirect('/users/login');
      }
    });
  }
});

/*
router.get('/logout',function(req,res){
	req.logout();
	res.redirect('/users/login');
});
*/
module.exports=router;