const express = require('express');
const app = express();

// Import the routes
const notesRoute = require('./notes');

app.use('/notes', notesRoute);

module.exports = app;