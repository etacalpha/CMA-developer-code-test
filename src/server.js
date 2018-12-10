const path = require('path');
const express = require('express');
const app = express();

// Serve static files
app.use(express.static(__dirname + '/dist/cma-gallery'));

// Send all requests to index.html
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/cma-gallery/index.html'));
});

// default Heroku port
app.listen(process.env.PORT || port);

// Heroku automagically gives us SSL
// Lets write some middleware to redirect us
var env = process.env.NODE_ENV || 'development';


