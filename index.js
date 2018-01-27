'use strict';

const express = require('express');
const bodyParser = require('body-parser');
var request = require('request');
const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

// Show some help if someone visits the API.
app.get('/', (req, res) => res.send('Hello World!'));

// Deal with posts to the API.
app.post('/', function(req, res) {
  res.json({
    message: 'test'
  });
});

// Start the server.
app.listen((process.env.PORT || 8000), function() {
    console.log("Server up and listening");
});
