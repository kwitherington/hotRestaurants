
function getTables() {
    $.ajax({ url: "/api/tables", method: "GET" })
      .then(function(tableData) {

        // Loop through and display each of the customers
        for (var i = 0; i < tableData.length; i++) {

          var tableList = $("#tableSection");

          var listItem = $("<li class='list-group-item mt-3'>");

          listItem.append(
            $("<h2>").text("Table #" + (i + 1)),
            $("<hr>"),
            $("<h2>").text("ID: " + tableData[i].customerID),
            $("<h2>").text("Name: " + tableData[i].customerName),
            $("<h2>").text("Email: " + tableData[i].customerEmail),
            $("<h2>").text("Phone: " + tableData[i].phoneNumber)
          );

          tableList.append(listItem);
        }
      });
  }

  function getWaitlist() {

    $.ajax({ url: "/api/waitlist", method: "GET" })
      .then(function(waitData) {

        // Loop through and display each of the customers
        for (var i = 0; i < waitData.length; i++) {

          var waitList = $("#waitlistSection");

          var listItem = $("<li class='list-group-item mt-3'>");

          listItem.append(
            $("<h2>").text("Table #" + (i + 1)),
            $("<hr>"),
            $("<h2>").text("ID: " + waitData[i].customerID),
            $("<h2>").text("Name: " + waitData[i].customerName),
            $("<h2>").text("Email: " + waitData[i].customerEmail),
            $("<h2>").text("Phone: " + waitData[i].phoneNumber)
          );

          waitList.append(listItem);
        }
      });
  }

  // This function resets all of the data in our tables for demo restart
  function clearTable() {
    alert("Clearing...");

    // Clear the tables on the server and then empty the elements on the client
    $.ajax({ url: "/api/clear", method: "POST" }).then(function() {
      $("#waitList").empty();
      $("#tableList").empty();
    });
  }

  $("#clear").on("click", clearTable);

  getTables();
  getWaitlist();