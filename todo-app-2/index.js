// importing express module
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

// connect todotask.js
const TodoTask = require("./models/TodoTask");

dotenv.config();

// tell server to look to the public folder for css
app.use("/static", express.static("public"));

// parse the request
app.use(express.urlencoded({ extended: true }));

// connection to data base
// mongoose.set("useFindAndModify", false);
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () => {
  console.log("Connected to db!");

  app.listen(3000, () => console.log("Server Up and running"));
});

// view configuration of engine
app.set("view engine", "ejs");

// use the get method render todo.ejs and connect TodoTask
app.get("/", (req, res) => {
  TodoTask.find({}, (err, tasks) => {
    res.render("todo.ejs", { todoTasks: tasks });
  });
});

// use the post method to communicate data changes
app.post('/',async (req, res) => {
    const todoTask = new TodoTask({
    content: req.body.content
  });
  try {
    await todoTask.save();
    res.redirect("/");
  } catch (err) {
    res.redirect("/");
  }
});

// create methods for updates
app
.route("/edit/:id")
.get((req, res) => {
    const id = req.params.id;
    TodoTask.find({}, (err, tasks) => {
    res.render("todoEdit.ejs", { todoTasks: tasks, idTask: id });
  });
})
.post((req, res) => {
    const id = req.params.id;
    TodoTask.findByIdAndUpdate(id, { content: req.body.content }, err => {
      if (err) return res.send(500, err);
      res.redirect("/");
  });
});

// create methods for deletions
app.route("/remove/:id").get((req, res) => {
  const id = req.params.id;
  TodoTask.findByIdAndRemove(id, err => {
    if (err) return res.send(500, err);
    res.redirect("/");
  });
});