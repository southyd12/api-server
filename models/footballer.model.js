const mongoose = require("mongoose");

const {
  Schema,
} = mongoose;

const FootballerSchema = new Schema({
  name: {type: String, required: true},
  age: {type: Number, required: true},
  position: {type: String, required: true}
});

const Footballer = mongoose.model("Footballer", FootballerSchema);

module.exports = Footballer;