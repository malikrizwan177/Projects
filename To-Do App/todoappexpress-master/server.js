const express = require("express");
const mongoose = require("mongoose");
var cors = require("cors");
const connectDB = require("./db");

const Todo = require("./model/Todo.js");

const app = express();

app.use(cors());
app.use(express.json());

const port = 5000;

connectDB();

app.get("/", async (req, res) => {
  const todos = await Todo.find({});

  res.send({
    todos,
  });
});

app.post("/createTodo", async (req, res) => {
  console.log("BODY", req.body);
  const todo = new Todonod({
    data: req.body.data
  });

  let savedItem = await todo.save();

  res.send({
    savedItem,
    status: 1,
    message: "To-do List Added!",
  });
  console.log("savedItem", savedItem);
});

app.delete("/deleteTodo/:id", async (req, res) => {
  const deletedTodo = await Todo.findByIdAndDelete(req.params.id);
  res.status(200).json({ status: 1, message: "Todo Deleted Successfully@" });
});

app.listen(port, () => {
  console.log("app is running at PORT " + port);
});
