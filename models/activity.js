const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const activitySchema = new Schema({
  title: { type: String, required: true },
  link: { type: String, required: true },
  img: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Activity = mongoose.model("activity", activitySchema);

module.exports = Activity;
