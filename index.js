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
  response = "This is a sample response from your webhook!" //Default response from the webhook to show it's working

  res.setHeader('Content-Type', 'application/json'); //Requires application/json MIME type
  res.send(JSON.stringify({
    "speech": response,
    "displayText": response 
    //"speech" is the spoken version of the response, "displayText" is the visual version
  }));
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
