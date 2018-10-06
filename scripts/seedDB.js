const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/loopfeed",
  {
    useNewUrlParser: true
  }
);

const featureSeed = [
  {
    title: 'Search',
    team: 'Alpha',
    status: 'going great',
    image: 'vvvvvv',
    createdAt: new Date(Date.now())
  },
  {
    title: 'CFL',
    team: 'Bravo',
    status: 'going Really great',
    image: 'vvvvvv',
    createdAt: new Date(Date.now())
  }

];

db.Feature
  .remove({})
  .then(() => db.Feature.collection.insertMany(featureSeed))
  .then(data => {
      console.log(data)
    console.log(data.insertedCount + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
