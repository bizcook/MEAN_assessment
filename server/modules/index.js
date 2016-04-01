var express = require("express");
var router = express.Router();
var path = require("path");
var Heroes = require("../models/heroes.js");

router.get("/hero", function(req, res){
  Heroes.find({}, function(err, data){
    if(err){
      console.log("ERROR in INDEXJS to GET hero", err);
    }
    res.send(data);
  });
});

router.post("/hero", function(req, res){
  console.log("HERE IS THE REQ BODY", req.body);


  //create a new iteration of the heroes schema...maybe double check to rename?
  var addedHero = new Heroes({"alias" : req.body.alias, "first_name" : req.body.first_name, "last_name" : req.body.last_name, "city": req.body.city, "power_name" : req.body.power_name});
  addedHero.save(function(err, data){
    if(err){
      console.log("error saving hero:", err);
    }
    res.send(data);
  });
});

//this is supposed to delete a hero based on their ID, but it doesnt work...yet
router.delete("/hero/:id", function(req, res){
  console.log("in the app js to delete", req.params.id);
  Heroes.remove({_id: req.params.id}, function(err, data){
    if(err){
      console.log(err);
    }
    res.status(200).send();
  });
});

router.get("/*", function(req, res){
  var file = req.params[0] || "/views/index.html";
  res.sendFile(path.join(__dirname, "../public/", file));
});

module.exports = router;
