const notesRouter = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');

// Get route
notesRouter.get('/', (req, res) => {
    console.info(`${req.method} request received for /notes`);
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

// Post route
notesRouter.post('/', (req, res) => {
    console.info(`${req.method} request received for /notes`);
    res.json('POST request sent to /notes');
    readAndAppend(req.body, './db/db.json');
});



module.exports = notesRouter;