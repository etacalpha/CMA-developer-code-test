var path = require('path');
var express = require('express');
var app = express();

// Serve static files
app.use(express.static(__dirname + '/dist/cma-gallery'));

// Send all requests to index.html
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/cma-gallery/index.html'));
});

// default Heroku port
app.listen(process.env.PORT || port);



