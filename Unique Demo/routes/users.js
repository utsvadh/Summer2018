var express=require('express');
var Login=require('../model/schema')
var router=express.Router();
var passport=require('passport');
var LocalStrategy=require('passport-local').Strategy;


//Register
router.get('/register',function(req,res){
	res.render('register');
});

//Login
router.get('/login',function(req,res){
	res.render('login');
});

//register post request
router.post('/register',function(req,res){
	var username=req.body.username;
	var password=req.body.password;
	var passwordConf=req.body.passwordConf;


//Validation
	req.checkBody('username','Name is required').notEmpty();
	req.checkBody('password','Password is required').notEmpty();
	req.checkBody('passwordConf','password is required').notEmpty();
	req.checkBody('passwordConf','password dont match').equals(req.body.password);
	var errors=req.validationErrors();

	if(errors){
		console.log('error');
		res.status(422).send();
	}
	else{
		console.log('perfect');
		Login.create(req.body).then(function(Login){
			res.send(Login);
		});
	};
});

passport.use(new LocalStrategy(
  function(username,password,done){
  	Login.getUserByUsername(username,function(err,login){
  		if(err) throw err;
  		if(!login){
  			
  			return done(null, false, {message: 'Unknown user'});
  		}
  		Login.comparePassword(password,login.password, function(err,isMatch){
  			if(err) throw err;
  			if(isMatch){
  				return done(null, login);
  			}
  			else{
  				return done(null,false, {message:'Invalid password'});
  			}
  		});
  	});
  }));

passport.serializeUser(function(login, done) {
  done(null, login.id);
});

passport.deserializeUser(function(id, done) {
  User.getUserById(id, function(err, login) {
    done(err, login);
  });
});

//Authentication
router.post('/login',
  passport.authenticate('local'),
  function(req, res) {
    res.send('you are logged in');
    res.redirect('/users/' + req.login.username);
  });

router.get('/logout',function(req,res){
	req.logout();
});

module.exports=router;