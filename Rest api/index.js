var express=require('express');
var bodyParser=require('body-parser');
var mongoose=require('mongoose');

var routes=require('./routes/api');

var app=express();
mongoose.connect('mongodB://localhost/ninjago');
mongoose.Promise=global.Promise;
app.use(express.static('public'));

app.use(bodyParser.json());
app.use("/api",routes);
app.use(function(err,req,res,next){
	res.status(422).send({error:err.message});
});

app.listen(3000,function(){
	console.log("listening to port 3000");	
});
