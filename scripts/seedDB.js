const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/boredom", {
  useMongoClient: true
});

const Seed = [{
  
}];

db.activity.remove({})
  .then(() => db.activity.collection.insertMany(Seed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
