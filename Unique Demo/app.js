var express=require('express');
var users=require('./routes/users');
var index=require('./routes/index');
var bodyParser=require('body-parser');
var mongoose=require('mongoose');
var passport=require('passport');
var session=require('express-session');
//var passportConfig=require('./config/passport-config');
var bcrypt=require('bcryptjs');
var cookieSession=require('cookie-session');


//express app

var app=express();

//connection to mongodb
mongoose.connect('mongodB://localhost/authentication');
mongoose.Promise=global.Promise;


//Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//passport initialization
//app.use(session({secret:'random'}));

app.use(session({
  secret: 'work hard',
  resave: true,
  saveUninitialized: false,
  
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/',index);
app.use('/users',users);

//view engine
app.set('view engine','ejs');








//Listening to request

app.listen(3000,function(req,res){
	console.log("port is running");
})