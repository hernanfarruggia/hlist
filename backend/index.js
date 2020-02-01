const express = require('express'),
    cors = require('cors'),
    app = express(),
    generalRoutes = require('./routes/general'),
    todosRoutes = require('./routes/todos'),
    mongoose = require('mongoose');
    
app.use(cors());
app.use(express.json());

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect('mongodb://localhost/todos', { useNewUrlParser: true })
    .then(() => console.log('MongoDB initialized successfuly!'))
    .catch(err => console.log('Error initializing MongoDB:', err));

generalRoutes.set(app);
todosRoutes.set(app);

const port = process.env.PORT || 4000; 

app.listen(port, () => console.log(`Server listening in http:/localhost:${port}/`));