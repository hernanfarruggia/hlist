const express = require('express'),
    app = express(),
    generalRoutes = require('./routes/general'),
    todosRoutes = require('./routes/todos');

generalRoutes.set(app);
todosRoutes.set(app);

app.listen('4000', () => console.log('Server listening in http:/localhost:4000/'));