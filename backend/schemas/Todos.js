const mongoose = require('mongoose');

const TodosSchema = new mongoose.Schema({
    name: String,
    description: String,
    createdDate: Date,
    uodatedDate: Date,
    state: String
});

module.exports = mongoose.model('Todo', TodosSchema);