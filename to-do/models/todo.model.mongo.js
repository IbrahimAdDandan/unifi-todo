const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const Model = mongoose.model;

const ToDoSchema = new Schema({
  _id: ObjectId,
  name: String,
  desc: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports.ToDo = Model('ToDo', ToDoSchema);