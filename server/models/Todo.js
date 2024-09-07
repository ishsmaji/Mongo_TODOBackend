const mongoose = require('mongoose');

// Define the Todo schema
const todoSchema = new mongoose.Schema({
    title: { type: String, required: true },
    completed: { type: Boolean, default: false }
});

// Create the Todo model
const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo; // Export the model