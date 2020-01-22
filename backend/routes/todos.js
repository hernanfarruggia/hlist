const todos = [
    {
        id: 0,
        text: 'Clean the bathroom',
        state: 'active'
    },
    {
        id: 1,
        text: 'Do groceries',
        state: 'active'
    }
];

const response = {
    data: null,
    error: null,
    status: null
};

module.exports.set =  (app) => {
    app.get('/todos', (req, res) => {
        response.data = todos;
        response.status = 200;
        res.status(200).send(response);
    });

    app.get('/todos/:id', (req, res) => {
        const id = req.params.id;
 
        response.data = todos.find({ id });
        response.status = 200;
        res.status(200).send(response);
    });

    app.post('/todos', (req, res) => {
        const todo = req.body.todo;

        todo.id = todos.length;

        todos.push(todo)

        response.data = todo;
        response.status = 200;
        res.status(200).send(response);
    });

    app.put('/todos/:id', (req, res) => {
        const id = req.params.id,
            newTodo = req.params.todo,
            oldTodo = todos.find({ id });

        oldTodo.text = newTodo.text;
        oldTodo.status = newTodo.status;

        response.data = oldTodo;
        response.status = 200;
        res.status(200).send(response);
    });

    app.delete('/todos/:id', (req, res) => {
        const id = parseInt(req.params.id),
            todoIndex = todos.findIndex(todo => todo.id === id);

        todos.splice(todoIndex, 1);

        response.status = 204;
        res.status(204).send(response);
    });
}