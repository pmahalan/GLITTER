const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/glitternotes"
);

const noteSeed = [
    {
        destination: "Edinburgh, Scottland",
        season: "Christmas!",
        food: "Steak and Kidney Pie",
        activities: "Learn to play bagpipes!",
        sights: "Cafe where J.K. Rowling wrote Harry Potter"
      },
      {
        destination: "L.A., California",
        season: "Summer or Spring!",
        food: "Avocado toast, espresso martinis, lavender lemonade",
        activities: "Hit the beach, shop on Rodeo Drive",
        sights: "Hollywood sign, walk of fame"
      },
      {
        destination: "Boston, Massachusets",
        season: "Fall!",
        food: "Lobster and clam chowder, blueberry cobbler",
        activities: "Salem day excursion, haunted house and mansion tours",
        sights: "Harvard, MIT, Cambridge, Fenway Park"
      },
      {
        destination: "Paris, France",
        season: "Spring or Fall",
        food: "Croissants, Escargo",
        activities: "Cruise on the Seine, meet a hot guy",
        sights: "The Louvre, Eiffel Tower"
      },
      {
        destination: "Florence, Italy",
        season: "Summer",
        food: "Gelato, tiramisu, pizza, pasta, sangria, chocolate, cheese",
        activities: "Meet a really hot guy and ride on the back of his motorcycle",
        sights: "Freaking everything"
      },
];

db.Note
  .remove({})
  .then(() => db.Note.collection.insertMany(noteSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
