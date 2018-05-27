var passport=require('passport');
var localStrategy=require('passport-local').Strategy;
var User=require('../models/schema');



passport.use(new localStrategy(
  function(username,password,done){
    User.findOne({username:username},function(err,user){
      if(err){
        return done(err);
      }
      if(!user){
        console.log('wrong username');
        return done(null,false);
      }
      /*
      if(user.password!=password){
        console.log('wrong password');
        return done(null,false);
      }
      */
      if(!user.validPassword(password)){
        console.log('wrong password');
        return done(null,false);
      }
      return done(null,user);
    });
  }));


passport.serializeUser(function(user,done){
  done(null,user.id);
});

passport.deserializeUser(function(id,done){
  User.findById(id,function(err,user){
    done(err,user);
  });
});
