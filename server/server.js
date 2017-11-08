'use strict';

const express = require('express');
const app = express();
const cors = require('cors');

// contacts were randomly generated using
// https://www.json-generator.com/
const contacts = require('./contacts');

// this is for cross-origin requests
app.use(cors());

// set up an endpoint to get contacts as json
app.get('/contacts', (req, res) => res.send(contacts));

// listen to port 4000 - if this was a production-ready app,
// I would have a config file which would store the port
// so the information wouldn't need to be hardcoded
app.listen(4000);