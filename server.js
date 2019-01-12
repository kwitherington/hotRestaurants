
var express = require("express");
var path = require("path");

var app = express();

var reservation = [];

var waitlist = [];

var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });
  
  app.get("/table", function(req, res) {
    res.sendFile(path.join(__dirname, "table.html"));
  });

  app.get("/reservation", function(req, res) {
    res.sendFile(path.join(__dirname, "reservation.html"));
  });
  
  // Displays all characters
  app.get("/api/tables", function(req, res) {
    return res.json(reservation);
  });

  // Create New Characters - takes in JSON input
app.post("/api/tables", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newReservation = req.body;
  
    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newReservation.routeName = newReservation.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(newReservation);
  
    characters.push(newReservation);
  
    res.json(newReservation);
  });

  

  // Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  