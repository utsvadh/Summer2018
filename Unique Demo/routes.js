var express=require('express');
var routes=express.Router();
var Login=require('./model/schema');


routes.post('/',function(req,res){
	Login.create(req.body).then(function(routes){
		res.send(routes);
	});
});



module.exports=routes;