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

var Login=mongoose.model('logindetails',LoginSchema);

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


module.exports=Login;