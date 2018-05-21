var express=require('express');
var bodyParser=require('body-parser');
var routes=require('./routes');

var app=express();
var mongoose=require('mongoose');
mongoose.connect('mongodB://localhost/Details');
mongoose.Promise=global.Promise;
app.use(bodyParser.json());
app.use(routes);



app.listen(3000,function(){
	console.log("the port is running ");
})