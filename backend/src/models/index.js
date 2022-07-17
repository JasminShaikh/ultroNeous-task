const mongoose = require("mongoose");
const db = {};
db.mongoose = mongoose;

db.User = require("./userModel");
db.Property = require("./propertyModel");
db.userProperty = require("./userPropertyModel");

module.exports = db;
