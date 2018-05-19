const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//set up an express app
const app = express();

//connect to mongodb
mongoose.connect('mongodb://localhost/mugiwarago');
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

//initialize the routes
app.use('/api', require('./routes/api'));

//error handling middleware
app.use(function(err, req, res, next){
  //console.log(err);
  res.status(422).send({error: err.message});
});

//listening to requests
app.listen(process.env.port || 4000, function(){
  console.log('Now listening for requests');
});
