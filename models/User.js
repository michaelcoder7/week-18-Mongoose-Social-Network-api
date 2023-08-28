const { Schema, model } = require("mongoose");
const Thought = require("./Thought");

var validateEmail = function (email) {
  var re = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
  return re.test(email);
};

// Schema to create User model
const userSchema = new Schema({});

const User = model("user", userSchema);

module.exports = User;
