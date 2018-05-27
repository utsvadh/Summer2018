var mongoose=require('mongoose');
//var Hash = require('password-hash');
var Schema=mongoose.Schema;
//var passport=require('passport');
var bcrypt=require('bcryptjs')
//var passportConfig=require('../config/passport-config');


var userSchema=new Schema({
	username:{
		type:String
	},
	password:{
		type:String
	}
});

//hashing password

 userSchema.pre('save', function(next) {
    var user = this;
 bcrypt.hash(user.password, 8, function(err, hash) {
            if (err) return next(err);
            user.password = hash;
            next();
        });
    });

   
module.exports=userSchema.methods.validPassword = function(password) {
    if(this.password != null) {
        return bcrypt.compareSync(password, this.password);
    } else {
        return false;
    }
};

var User=mongoose.model('Authentication',userSchema);
module.exports=User;
