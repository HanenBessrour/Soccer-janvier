// import mongoose module
const mongoose = require("mongoose");

// create team schema
const userSchema = mongoose.Schema({
    firstName : String,
    lastName : String,
    email : String,
    pwd : String,
    avatar:String
});

// create Model Name "Team"
const user = mongoose.model ("User", userSchema);

// make team exportable
module.exports = user;