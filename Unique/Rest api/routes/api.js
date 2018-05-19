var express=require('express');

var router=express.Router();
var Ninja=require('../models/ninja');
//Getting the ninjas
router.get('/ninjas',function(req,res,next){
	
	Ninja.find({}).then(function(ninjas){
		res.send(ninjas);
	});
});

	/*
	Ninja.geoNear(
		{type:'Point', coordinates:[parseFloat(req.query.lng),parseFloat(req.query.lat)]},
		{maxDistance: 100000, spherical:true}
		).then(function(ninjas){
			res.send(ninjas);
		});
		
	});

*/
//Creating a ninja
router.post('/ninjas',function(req,res,next){
	Ninja.create(req.body).then(function(ninja){
		res.send(ninja);
	}).catch(next);			//goes to the next middle ware if .create function has error.
	
});

//Updating a ninja

router.put('/ninjas/:id',function(req,res){
	Ninja.findByIdAndUpdate({_id:req.params.id},req.body).then(function(){
		Ninja.findOne({_id:req.params.id}).then(function(ninja){
			res.send(ninja);
		});
	});
});
	

//Delteing a ninja

router.delete('/ninjas/:id',function(req,res){
	//console.log(req.params.id);
	Ninja.findByIdAndRemove({_id: req.params.id}).then(function(ninja){
		res.send(ninja);
	});
	
});


module.exports=router;