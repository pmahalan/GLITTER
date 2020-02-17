// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var Note = require("../models/note.js");


// Routes
// =============================================================
module.exports = function(app) {

  // Get all notes
  app.get("/api/all", function(req, res) {

    // Finding all Notes, and then returning them to the user as JSON.
    // Sequelize queries are asynchronous, which helps with perceived speed.
    // If we want something to be guaranteed to happen after the query, we'll use
    // the .then function
    Note.findAll({}).then(function(results) {
      // results are available to us inside the .then
      res.json(results);
    });

  });

  // Add a note
  app.post("/api/new", function(req, res) {

    console.log("Note Data:");
    console.log(req.body);

    Note.create({
      place: req.body.place,
      timeofyear: req.body.timeofyear,
      cuisine: req.body.cuisine,
      thingstodo: req.body.thingstodo,
      landmarks: req.body.landmarks

    }).then(function(results) {
      // `results` here would be the newly created note
      res.end();
    });

  });

};