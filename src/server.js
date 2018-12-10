var path = require('path');
var express = require('express');
var app = express();

let forceSSL = (req, res, next) => {
  if (req.headers['x-forwarded-proto'] !== 'https') {
    return res.redirect(['https://', req.get('Host'), req.url].join(''));
  }
  return next();
};

if (env === 'production') {
  app.use(forceSSL);
}

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


