const todos = [
    {
        id: 1,
        text: 'Clean the bathroom',
        state: 'active'
    },
    {
        id: 2,
        text: 'Do groceries',
        state: 'active'
    }
];

module.exports.set =  (app) => {
    app.get('/todos', (req, res) => {
        res.send(todos);
    });

    app.get('/todos/:id', (req, res) => {
        const id = req.params.id;
 
        res.send(todos.find({ id }));
    });

    app.post('/todos', (req, res) => {
        const todo = req.body.todo;

        todo.id = todos.length;

        todos.push(todo)

        res.send(todo);
    });

    app.put('/todos/:id', (req, res) => {
        const id = req.params.id,
            newTodo = req.params.todo,
            oldTodo = todos.find({ id });

        oldTodo.text = newTodo.text;
        oldTodo.status = newTodo.status;

        res.send(oldTodo);
    });

    app.delete('/todos/:id', (req, res) => {
        res.send({})
    });
}