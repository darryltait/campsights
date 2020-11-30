// require our modules
const mongoose = require('mongoose');

// create a shortcut variable
const Schema = mongoose.Schema;

// define our camperSchema
const camperSchema = new Schema({
    name: String,
    email: String,
    avatarURL: String,
    googleId: String
}, {
    timestamps: true
});


// export our schema as a model with mongoose.model
module.exports = mongoose.model('Camper', camperSchema);