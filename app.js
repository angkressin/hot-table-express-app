// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var waitlist = [];
var reservations = [];

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

app.get("/api/reservations", function(req, res) {
  res.sendFile(path.join(__dirname, reservations));
});


// waitlist api get call
app.get("/api/:waitlist?", function(req, res) {
  return res.json(waitlist);
});






// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});



if (reservations.length > 5) {
  // post to waitlist
  app.post('/api/waitlist', function(req, res) {
    processRequest(waitlist);
  });
} else {
  // post to reseravtion
  app.post('/api/reservations', function(req, res) {
    processRequest(reservations);
  });
}


function processRequest(pushArray) {
  var newRequest = req.body;

  newRequest.routeName = newRequest.name.replace(/\s+/g, "").toLowerCase();

  console.log(newRequest);

  pushArray.push(newRequest);

  res.json(newRequest);
}

