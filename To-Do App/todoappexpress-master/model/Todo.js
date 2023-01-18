const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  data: {
    type: String,
  }
});
const Todo = new mongoose.model("Todo", schema);

module.exports = Todo;
