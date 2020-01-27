const ERRORS = require('../constants/errors');

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

module.exports.set = (app) => {
    app.get('/todos', (req, res) => {
        response.data = todos;
        response.status = 200;
        res.status(response.status).send(response);
    });

    app.get('/todos/:id', (req, res) => {
        if (!req.params.id) {
            response.error = ERRORS.MISSING_PARAMS;
            response.status = 400;
        } else {
            const todo = todos.find((todo) => todo.id === parseInt(req.params.id));
            
            if (!todo) {
                response.error = ERRORS.NOT_FOUND + ` ID: ${req.params.id}`;
                response.status = 404;
            } else {
                response.data = todo;
                response.status = 200;
            }
        }

        res.status(response.status).send(response);
    });

    app.post('/todos', (req, res) => {
        const todo = Object.assign({ id: todos.length }, req.body.todo);

        todos.push(todo)

        response.data = todo;
        response.status = 200;

        res.status(response.status).send(response);
    });

    app.put('/todos/:id', (req, res) => {
        if (!req.params.id || !req.params.todo) {
            response.error = ERRORS.MISSING_PARAMS;
            response.status = 400;
        } else {
            const newTodo = req.params.todo,
                oldTodo = todos.find({ id: req.params.id });
    
            if (!oldTodo) {
                response.error = ERRORS.NOT_FOUND + ` ID: ${req.params.id}`;
                response.status = 404;
            } else {
                oldTodo.text = newTodo.text;
                oldTodo.status = newTodo.status;
        
                response.data = oldTodo;
                response.status = 200;
            }
        }

        res.status(response.status).send(response);
    });

    app.delete('/todos/:id', (req, res) => {
        if (!req.params.id) {
            response.error = ERRORS.MISSING_PARAMS;
            response.status = 400;
        } else {
            const todoIndex = todos.findIndex(todo => todo.id === parseInt(req.params.id));
    
            if (!todoIndex) {
                response.error = ERRORS.NOT_FOUND + ` ID: ${req.params.id}`;
                response.status = 404;
            } else {
                todos.splice(todoIndex, 1);
                response.status = 204;
            }
        }

        res.status(response.status).send(response);
    });
}