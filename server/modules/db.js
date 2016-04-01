var mongoose = require("mongoose");

var mongoURI = "mongodb://localhost/hero_db";
var MongoDB = mongoose.connect(mongoURI).connection;

MongoDB.on("error", function(err){
  console.log("mongO CoNnection ERROR: ", err);
});

MongoDB.on("open", function(){
  console.log("MONGO00 connection open");
});

module.exports = MongoDB;
