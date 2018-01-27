'use strict';

const express = require('express');
const bodyParser = require('body-parser');
var request = require('request');
const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.post('/', function(req, res) {
  res.json({
    message: 'test'
  });
});



app.listen((process.env.PORT || 8000), function() {
    console.log("Server up and listening");
});
