const express = require('express');
const router = express.Router();
const Mugiwara = require('../models/login');
//get a list of mugiwaras from the db
router.get('/mugiwaras', function(req, res, next){
   res.send({type: 'GET'});
});

//add a new mugiwara to the db
router.post('/mugiwaras', function(req, res, next){
    Mugiwara.create(req.body).then(function(login){
      res.send(login);
    }).catch(next);

});

//update a mugiwara in the db
router.put('/mugiwaras/:id', function(req, res, next){
    Mugiwara.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
      Mugiwara.findOne({_id: req.params.id}).then(function(login){
        res.send(login);
    });
  });
});

//delete a mugiwara from the db
router.delete('/mugiwaras/:id', function(req, res, next){
        Mugiwara.findByIdAndRemove({_id: req.params.id}).then(function(login){
          res.send(login);
        });
});

module.exports = router;
