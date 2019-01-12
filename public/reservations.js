
$("#resSubmit").on("click", function(event) {
    event.preventDefault();
    var newReservation = {
      customerName: $("#nameInput").val().trim(),
      phoneNumber: $("#phoneInput").val().trim(),
      customerEmail: $("#emailInput").val().trim(),
      customerID: $("#uniqueID").val().trim()
    };

    console.log(newReservation);

    $.post("/api/tables", newReservation)
      .then(function(data) {

        // If a table is available, tell user they are booked.
        if (data) {
          alert("Yay! You are officially booked!");
        }

        // If a table is available, tell user they on the waiting list.
        else {
          alert("Sorry you are on the wait list");
        }

        // Clear the form when submitting
        $("#nameInput").val("");
        $("#phoneInput").val("");
        $("#emailInput").val("");
        $("#uniqueID").val("");

    });

});