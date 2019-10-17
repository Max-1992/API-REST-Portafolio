// Imports
const express = require('express');
const dotenv = require('dotenv');


// Initializations
const app = express();
dotenv.config();

// Database Connected
const db = require('./db-connect');
db();


// Router
const router = require('./routes/api/index.routes');


// Headers y Cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// Routes
router(app);


// Start the Server
app.listen(process.env.PORT, () => {
    console.log(`Server On PORT ${process.env.PORT}`);
});