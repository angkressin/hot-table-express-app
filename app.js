// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var waitlist = [];
var reservation = [];

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// paths to html pages

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));

});

app.get("/view", function(req, res) {
  res.sendFile(path.join(__dirname, "view.html"));

});

app.get("/reservations", function(req, res) {
  res.sendFile(path.join(__dirname, "reservations.html"));
});










// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});



if (reservation.length > 5) {
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
