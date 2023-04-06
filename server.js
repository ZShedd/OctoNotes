const express = require('express');
const path = require('path');

const routes = require('./routes/index');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', routes);

app.use(express.static('public'));

app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.listen(process.env.PORT || 5000, () =>
    console.log(`Listening on port http://0.0.0.0:${process.env.PORT}, good to go.`)
);