const mongoose = require('mongoose');

const TodosSchema = new mongoose.Schema({
    text: String,
    state: String
});

module.exports = mongoose.model('Todo', TodosSchema);