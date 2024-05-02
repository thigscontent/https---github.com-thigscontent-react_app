const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  name: { type: String, unique: true},
  author: { type: String }
});

module.exports = mongoose.model("Book", bookSchema);
