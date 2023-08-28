const { Schema, model } = require("mongoose");
const Reaction = require("./Reaction");
const formatDate = require("../utils/date");

// Schema to create a course model
const thoughtSchema = new Schema({});

const Course = model("thought", thoughtSchema);

module.exports = Thought;
