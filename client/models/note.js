// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection");

// Creates a "Note" model that matches up with DB
// "note" ON LINE ELEVEN IS ASSOCIATED WITH THE ROWS IN YOUR MYSQL TABLE.
var Note = sequelize.define("note", {
  place: Sequelize.STRING,
  timeofyear: Sequelize.STRING,
  cuisine: Sequelize.STRING,
  thingstodo: Sequelize.STRING,
  landmarks: Sequelize.STRING
});

// Syncs with DB
Note.sync();

// Makes the Chirp Model available for other files (will also create a table)
module.exports = Note;
