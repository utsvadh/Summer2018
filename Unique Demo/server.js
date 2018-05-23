var express=require('express');
var path = require('path');
var cookieParser=require('cookie-parser');
var bodyParser=require('body-parser');
var session=require('express-session');
var expressValidator=require('express-validator');
var exphbs = require('express-handlebars');
var passport=require('passport');
var LocalStrategy=require('passport-local').Strategy;

//connection to database
var mongoose=require('mongoose');
mongoose.connect('mongodB://localhost/Details');
mongoose.Promise=global.Promise;

var routes=require('./routes/index');
var users=require('./routes/users');

var app=express();

//view engine
app.set('view engine','ejs');


//body parser
app.use(bodyParser.json());
app.use(cookieParser());

//static folder
//app.use(express.static())

//session
app.use(session({
	secret: 'secret',
	saveUninitialized: true,
	resave: true
}));

//Passport initialization
app.use(passport.initialize());
app.use(passport.session());

//express validator

app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
      var namespace = param.split('.')
      , root    = namespace.shift()
      , formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }
}));




//route handling
app.use('/',routes);
app.use('/users',users);




app.listen(3000,function(){
	console.log("the port is running ");
})