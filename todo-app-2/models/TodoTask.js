// mongoose connects our site to mongoDB
const mongoose = require('mongoose');

// describe how we want to store todo item
const todoTaskSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
})

// export schema
module.exports = mongoose.model('TodoTask',todoTaskSchema);