var mongoose=require('mongoose');
var bcrypt=require('bcrypt');
var Schema=mongoose.Schema;

var LoginSchema=new Schema({
	username:{
		type: String,
		unique: true,
		required: true,
		trim: true
	},
	password:{
		type: String,
		required: true
	},
	passwordConf:{
		type: String,
		required: true
	}
});

//authentication 
LoginSchema.statics.authenticate=function (password,callback){
	Login.findOne({username: username})
	.exec(function(err,login){
		if(err){
			return callback(err)
		}
		else if(!login){
			var err=new Error('User not found.');
			err.status=401;
			return callback(err);
		}
		 bcrypt.compare(password, user.password, function (err, result) {
        if (result === true) {
          return callback(null, user);
        } else {
          return callback();
	}
	})
});
}



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