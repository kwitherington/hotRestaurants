
var express = require("express");
var path = require("path");

var app = express();

var reservation = [];

var waitlist = [];

var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.static('public'));
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

  app.get("/api/waitlist", function(req, res) {
    return res.json(waitlist);
  });
  // Create New Characters - takes in JSON input
app.post("/api/tables", function(req, res) {
    
    var newReservation = req.body;

    if(reservation.length < 5 ){
			reservation.push(newReservation);
			res.json(true); 
		}

		// Or false if they don't have a table
		else{
			waitlist.push(newReservation);
			res.json(false); 
		}

	});
  
    
  

  // Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  