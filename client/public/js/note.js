/* global moment */

// You'll also obviously need to create a form, input area, placeholders... etc.

// YOU'LL NEED TO CREATE A BUTTON WITH AN ID OF 'note-submit'.
// When user clicks add-btn
$("#note-submit").on("click", function(event) {
    event.preventDefault();
  
    // Make a newNote object
    // YOU'LL HAVE TO GO TO YOUR INDEX.HTML PAGE AND ADD THE IDS BELOW TO THE APPROPRIATE INPUT FIELDS.
    var newNote = {
    place: $("#place").val().trim(),
    timeofyear: $("#timeofyear").val().trim(),
    cuisine: $("#cuisine").val().trim(),
    thingstodo: $("#thingstodo").val().trim(),
    landmarks: $("#landmarks").val().trim(),
    };
  
    console.log(newNote);
  
    // Send an AJAX POST-request with jQuery
    $.post("/api/new", newNote)
      // On success, run the following code
      .then(function() {
  
        var row = $("<div>");
        row.addClass("note");
  
        row.append("<p>" + newNote.place + "</p>");
        row.append("<p>" + newNote.timeofyear + "</p>");
        row.append("<p>" + newNote.cuisine + "</p>");
        row.append("<p>" + newNote.thingstodo + "</p>");
        row.append("<p>" + newNote.landmarks + "</p>");
  
    // SOMETHING HAS AN ID OF "note-area"
    // LOOK AT THE CHIRPY EXAMPLE AND FIND "chirp-area" TO SEE HOW IT CORRESPONDS
        $("#note-area").prepend(row);
  
      });
  
    // Empty each input box by replacing the value with an empty string
    $("#author").val("");
    $("#chirp-box").val("");
  });
  
  // When the page loads, grab all of our chirps
  $.get("/api/all", function(data) {
  
    if (data.length !== 0) {
  
      for (var i = 0; i < data.length; i++) {
  
        var row = $("<div>");
        row.addClass("note");

        row.append("<p>" + data[i].place + "</p>");
        row.append("<p>" + data[i].timeofyear + "</p>");
        row.append("<p>" + data[i].cuisine + "</p>");
        row.append("<p>" + data[i].thingstodo + "</p>");
        row.append("<p>" + data[i].landmarks + "</p>");

        $("#note-area").prepend(row);
  
      }
  
    }
  
  });
  