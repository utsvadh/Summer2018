var mongoose=require('mongoose');
var bcrypt=require('bcryptjs');
var Schema=mongoose.Schema;
var passportLocalMongoose=require('passport-local-mongoose');

var LoginSchema=new Schema({
	username:{
		type: String,
		index: true
	},
	password:{
		type: String,
		
	},
	passwordConf:{
		type: String,
		
	}
});

//LoginSchema.plugin(passportLocalMongoose);
/*
//authentication 
LoginSchema.statics.authenticate = function(username, password, callback) {
	this.findOne({ username: username }, function(error, user) {
		if (login &amp;&amp; Hash.verify(password, login.password)) {
			callback(null, user);
		} else if (login || !error) {
			// Email or password was invalid (no MongoDB error)
			error = new Error("Your username or password is invalid. Please try again.");
			callback(error, null);
		} else {
			// Something bad happened with MongoDB. You shouldn't run into this often.
			callback(error, null);
		}
	});
};

*/
//Hashing the password
LoginSchema.pre('save', function (next) {
  var login = this;
  bcrypt.hash(login.password, 10, function (err, hash){
    if (err) {
      return next(err);
    }
    login.password = hash;
    
  });
   bcrypt.hash(login.passwordConf, 10, function (err, hash){
    if (err) {
      return next(err);
    }
    login.passwordConf = hash;
    next();
  });
});


var Login=mongoose.model('logindetails',LoginSchema);
module.exports=Login;

module.exports.getUserByUsername = function(username,callback){
	var query= {username: username};
	Login.findOne(query,callback);
}


module.exports.getUserById = function(id,callback){
	
	Login.findById(id,callback);
}


module.exports.comparePassword=function(candidatePassword,hash,callback){
	bcrypt.compare(candidatePassword,hash,function(err,isMatch){
		if(err) throw err;
		callback(null,isMatch);
	});
}
