var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Heroes = new Schema({
  first_name: {type: String},
  last_name: {type: String},
  city: {type: String},
  power_name: {type: String}
});

module.exports = mongoose.model("Heroes", Heroes);
