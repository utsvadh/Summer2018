var express=require('express');
var router=express.Router();
var Login=require('./model/schema');


router.post('/',function(req,res){
	Login.create(req.body).then(function(routes){
		res.send(routes);
	}).catch(next);
});

router.post('/login', function(req,res){
	Login.authenticate(req.body.username, req.body.password,function(error,login){
		if(error || !login){
			res.status(422).send();
		}
		else{
			req.session.login=login;
			return res.redirect('/profile');
		}
	});
});


router.get('/profile', function (req, res, next) {
  Login.findById(req.session.Login)
    .exec(function (error, user) {
      if (error) {
        return next(error);
      } else {
        if (Login === null) {
          var err = new Error('Not authorized! Go back!');
          err.status = 400;
          return next(err);
        } else {
          return res.send('<h1>Name: </h1>' + Login.username  + '<br><a type="button" href="/logout">Logout</a>')
        }
      }
    });
});




router.get('/logout', function(req, res, next) {
  if (req.session) {
    // delete session object
    req.session.destroy(function(err) {
      if(err) {
        return next(err);
      } else {
        return res.redirect('/');
      }
    });
  }
});



module.exports=router;