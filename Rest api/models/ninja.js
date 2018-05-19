var mongoose=require('mongoose');

var Schema=mongoose.Schema;			//variable to store schema

//Creating a geo schema

var Geoschema=new Schema({
	type:{
		default: "Point",
		type: String		//type of the data
	},
	coordinates:{
		type:[Number],
		index: "2dsphere"
	}

});

//creating the schema

var NinjaSchema=new Schema({
	name:{
		type:String,
		required:[true,'Name field is required']
	},
	rank:{
		type:String
	},
	available:{
		type:Boolean,
		default:false
	},
	geometry:Geoschema
});

//Now creating the model

var Ninja=mongoose.model('ninja',NinjaSchema);

//Now exporting this module 

module.exports=Ninja;
	
