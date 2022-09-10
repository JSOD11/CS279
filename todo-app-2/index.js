// importing express module, which allows get/post requests
// import other packages needed to render the app
const express = require("express");
const app = express();
// dotenv enables the env
const dotenv = require("dotenv");
// mongoose lets us store our todo list items in mongodb
const mongoose = require("mongoose");

// connect todotask.js, handles updating mongodb database
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

  // tells the app to connect to localhost:3000, listen for requests
  app.listen(3000, () => console.log("Server Up and running"));
});

// view configuration of engine
// ejs creates frontend view
app.set("view engine", "ejs");

// use the get method render todo.ejs and connect TodoTask
// if a request is received then find tasks and render on page
app.get("/", (req, res) => {
  TodoTask.find({}, (err, tasks) => {
    res.render("todo.ejs", { todoTasks: tasks });
  });
});

// use the post method to communicate data changes
// create a todotask then redirect to "/"
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
// use todotask to search mongodb and render tasks as well as new task
app
.route("/edit/:id")
.get((req, res) => {
    const id = req.params.id;
    TodoTask.find({}, (err, tasks) => {
    res.render("todoEdit.ejs", { todoTasks: tasks, idTask: id });
  });
})
// use findByIdAndUpdate, update task and redirect to "/"
.post((req, res) => {
    const id = req.params.id;
    TodoTask.findByIdAndUpdate(id, { content: req.body.content }, err => {
      if (err) return res.send(500, err);
      res.redirect("/");
  });
});

// create methods for deletions
// use findByIdAndRemove to delete task in mongodb then redirect to "/"
app.route("/remove/:id").get((req, res) => {
  const id = req.params.id;
  TodoTask.findByIdAndRemove(id, err => {
    if (err) return res.send(500, err);
    res.redirect("/");
  });
});