//inisiasi express
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser'); 


const app = express();
const PORT = 5500;

//view engine setup
app.set('view engine', 'ejs');

//middleware
app.use(logger('dev'));
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }));

// Routes sbg middleware
const routes = require('./routes/routesIndex');
// const register = require('./routes/routesRegister')
const login = require('./routes/routesLogin');
const users = require('./routes/routesUser');
const items = require('./routes/routesItems');

app.use('/', routes);
// app.use('/register', register);
app.use('/login', login);
app.use('/api/users', users);
app.use('/api/items',items);

// Start server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
  });