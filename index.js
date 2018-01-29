'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

// Show a chat demo to anyone visiting the app.
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});

// Deal with posts to the API.
// Dialogflow sends all requests here, not to different paths.
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
