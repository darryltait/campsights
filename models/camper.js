
// require our modules
const mongoose = require('mongoose');

// create a shortcut variable
const Schema = mongoose.Schema;

// define reviewSchema
const reviewSchema = new mongoose.Schema({
    text: String
}, {
    timestamps: true});

// define our camperSchema
const camperSchema = new mongoose.Schema({
    name: String,
    email: String,
    avatarURL: String,
    reviews: [reviewSchema],
    googleId: String
}, {
    timestamps: true
});





// export our schema as a model with mongoose.model
module.exports = mongoose.model('Camper', camperSchema);