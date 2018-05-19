const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create mugiwara schema and model
const MugiwaraSchema = new Schema({
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
  //add in geo location
});

const Mugiwara = mongoose.model('mugiwara', MugiwaraSchema);
module.exports = Mugiwara;
