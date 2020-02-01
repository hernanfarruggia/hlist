const TodosModel = require('../schemas/Todos');
const ERRORS = require('../constants/errors');

const responseObj = () => {
    return {
        data: null,
        error: null,
        status: null
    };
}

module.exports.set = (app) => {

    app.get('/todos', (req, res) => {
        const response = responseObj();

        const execute = async () => {
            try {
                const todos = await TodosModel.find({});

                response.data = todos;
                response.status = 200;

                res.status(response.status).send(response);
            }
            catch (error) {
                response.error = error;
                response.status = 400;

                res.status(response.status).send(response);
            }
        }

        execute();
    });

    app.get('/todos/:id', (req, res) => {
        const response = responseObj();

        if (!req.params.id) {
            response.error = {
                message: ERRORS.MISSING_PARAMS
            };
            response.status = 400;

            return res.status(response.status).send(response);
        }

        const execute = async () => {
            try {
                const todo = await TodosModel.findById(req.params.id);

                response.data = todo;
                response.status = 200;

                res.status(response.status).send(response);
            }
            catch (error) {
                response.error = error;
                response.status = 400;

                res.status(response.status).send(response);
            }
        }

        execute();
    });

    app.post('/todos', (req, res) => {
        const response = responseObj();

        if (!req.body || !req.body.text) {
            response.error = {
                message: ERRORS.MISSING_PARAMS
            };
            response.status = 400;

            return res.status(response.status).send(response);

        }

        const execute = async () => {
            try {
                const newTodo = new TodosModel({
                        text: req.body.text,
                        state: 'pending'
                    });
    
                const todo = await newTodo.save();

                response.data = todo;
                response.status = 200;

                res.status(response.status).send(response);
            }
            catch (error) {
                response.error = error;
                response.status = 400;

                res.status(response.status).send(response);
            }
        }

        execute();
    });

    app.put('/todos/:id', (req, res) => {
        const response = responseObj();

        if (!req.params.id || !req.body || !req.body.text || !req.body.state) {
            response.error = {
                message: ERRORS.MISSING_PARAMS
            };
            response.status = 400;

            return res.status(response.status).send(response);

        }

        const execute = async () => {
            try {
                const todo = await TodosModel.findByIdAndUpdate(
                    req.params.id,
                    {
                        text: req.body.text,
                        state: req.body.state
                    },
                    { new: true }
                );

                response.data = todo;
                response.status = 200;

                res.status(response.status).send(response);
            }
            catch (error) {
                response.error = error;
                response.status = 400;

                res.status(response.status).send(response);
            }
        }

        execute();
    });

    app.delete('/todos/:id', (req, res) => {
        const response = responseObj();

        if (!req.params.id) {
            response.error = {
                message: ERRORS.MISSING_PARAMS
            };
            response.status = 400;

            return res.status(response.status).send(response);
        }

        const execute = async () => {
            try {
                const todo = await TodosModel.findByIdAndDelete(req.params.id);

                response.data = todo;
                response.status = 200;

                res.status(response.status).send(response);
            }
            catch (error) {
                response.error = error;
                response.status = 400;

                res.status(response.status).send(response);
            }
        }

        execute();
    });
}