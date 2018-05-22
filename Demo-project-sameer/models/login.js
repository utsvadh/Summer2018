const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create login schema and model
const LoginSchema = new Schema({
  name:{
    type: String,
    required: [true, 'Name field is required']
  },
  rank:{
    type:String
  },
  available:{
    type:Boolean,
    default:false
  }

});

const Login = mongoose.model('login', LoginSchema);
module.exports = Login;
