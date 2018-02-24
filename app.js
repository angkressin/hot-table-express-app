// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

var waitlist = [];
var reservation = [];

if (reseravtion.length > 5) {
  // post to waitlist
  app.post('/api/waitlist', function(req, res) {
    processRequest(waitlist);
  });
} else {
  // post to reseravtion
  app.post('/api/reseravtion', function(req, res) {
    processRequest(reservation);
  });
}

function processRequest(pushArray) {
  var newRequest = req.body;

  newRequest.routeName = newRequest.name.replace(/\s+/g, "").toLowerCase();

  console.log(newRequest);

  pushArray.push(newRequest);

  res.json(newRequest);
}
