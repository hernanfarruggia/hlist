const express = require('express'),
    cors = require('cors'),
    app = express(),
    generalRoutes = require('./routes/general'),
    todosRoutes = require('./routes/todos');

app.use(cors());
app.use(express.json());

generalRoutes.set(app);
todosRoutes.set(app);

const port = process.env.PORT || 4000; 

app.listen(port, () => console.log(`Server listening in http:/localhost:${port}/`));