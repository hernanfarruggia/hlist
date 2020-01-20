const express = require('express'),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    app = express(),
    generalRoutes = require('./routes/general'),
    todosRoutes = require('./routes/todos');

app.use(cors());
app.use(bodyParser());

generalRoutes.set(app);
todosRoutes.set(app);

app.listen('4000', () => console.log('Server listening in http:/localhost:4000/'));