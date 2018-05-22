var express=require('express');
var bodyParser=require('body-parser');
var routes=require('./routes');
var session=require('express-session');

var app=express();

//connection to database
var mongoose=require('mongoose');
mongoose.connect('mongodB://localhost/Details');
mongoose.Promise=global.Promise;

//handling session
app.use(session({
	secret: 'work hard',
	resave: true,
	saveUninitialized: false
}));

//body parser
app.use(bodyParser.json());

//route handling
app.use(routes);



app.listen(3000,function(){
	console.log("the port is running ");
})