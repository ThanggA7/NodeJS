const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Course = new Schema({
  name: { type: String, default: "", max: 255 },
  desc: { type: String, default: "", min: 1 },
  price: { type: String, default: "", min: 1 },
  image: { type: String, default: "", max: 255 },
  // slug: { type: String, default: "", max: 255 },
});

module.exports = mongoose.model("Course", Course);
