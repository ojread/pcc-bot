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
app.get('/', (req, res) => res.send("There's nothing for you here."));

// Deal with posts to the API.
// Dialog flow sends all requests here, not to different paths.
app.post('/', function(req, res) {
  // We can get request details here.
  console.log(req.body.queryResult.action);
  
  res.json({
    fulfillmentText: 'Test webhook response',
  });
});

// Start the server.
app.listen((process.env.PORT || 8000), function() {
    console.log("Server up and listening");
});
