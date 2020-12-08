// jshint esversion: 6

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(request, response) {
  console.log(request);
  response.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/', function(request, response) {
  console.log("First Name: " + request.body.first_name);
  console.log("Last Name: " + request.body.last_name);
  console.log("E-mail: " + request.body.email);

  response.send('<h1>Post request successfull!</h1>');
});

app.listen(process.env.port || 3000, function() {
  console.log('Listening on port 3000');
});
