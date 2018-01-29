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
app.get('/', (req, res) => res.send("There's nothing for you here!"));

// Deal with posts to the API.
app.post('/', function(req, res) {
  res.send('Test response from webhook');
});

// app.post('/weather', function(req, res) {
//   res.json({
//     'fulfillmentText': 'fulfillmentText',
//     // 'fulfillmentMessages': [
//     //   {
//     //     object(Message)
//     //   }
//     // ],
//     'source': 'source',
//     // 'payload': {
//     //   object
//     // },
//     // 'outputContexts': [
//     //   {
//     //     object(Context)
//     //   }
//     // ],
//     // 'followupEventInput': {
//     //   object(EventInput)
//     // },
//   }
//   );
// });

// Start the server.
app.listen((process.env.PORT || 8000), function() {
    console.log("Server up and listening");
});
