const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const noteSchema = new Schema({
    destination: { type: String, required: true },
    season: String,
    food: String,
    activities: String,
    sights: String
  });
  
  const Note = mongoose.model("Note", noteSchema);
  
  module.exports = Note;