// import mongoose module
const mongoose = require("mongoose");

// create player schema
const playerSchema = mongoose.Schema({
    age : Number,
    number : Number,
    name : String,
    position : String
});

// create Model Name "Player"
const player = mongoose.model ("Player", playerSchema);

// make player exportable
module.exports = player;