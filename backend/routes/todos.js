module.exports.set =  (app) => {
    app.get('/todos', (req, res) => {
        res.send([
            {
                id: 1,
                text: 'tests',
                state: 'active'
            },
            {
                id: 2,
                text: 'tests',
                state: 'active'
            }
        ]);
    });

    app.get('/todos/:id', (req, res) => {
        res.send({
            id: 1,
            text: 'tests',
            state: 'active'
        });
    });

    app.post('/todos', (req, res) => {
        res.send({
            id: 3,
            text: 'tests',
            state: 'active'
        });
    });

    app.put('/todos/:id', (req, res) => {
        res.send({
            id: 1,
            text: 'tests',
            state: 'active'
        });
    });

    app.delete('/todos/:id', (req, res) => {
        res.send({})
    });
}