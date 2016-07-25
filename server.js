var express = require('express');
var app = express();
var port = process.env.PORT || 8000;

/* serves main page to any request without a file extension */
app.get(/^[^.]*$/, function(req, res) {
  res.sendFile(__dirname + '/./index.html');
});

/* serves all the static files */
app.get(/^(.+)$/, function(req, res) {
  res.sendFile(__dirname + '/./' + req.params[0]);
});

app.listen(port, function() {
  console.log('Listening on ' + port);
});
