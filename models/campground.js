// require our modules
const mongoose = require('mongoose');

// create a shortcut variable
const Schema = mongoose.Schema;

// define our campgroundSchema
const campgroundSchema = new Schema({
    cgName: {
        type: String,
        required: true
    },
    location: {
        type: String,  
    },
    sites: {
        type: Number,
        required: true,
        min: 1
    },
    amenities: {
        type: String
    },
    attractions: {
        type: String
    }


}, {timestamps: true});

// export our schema as a model with mongoose.model
module.exports = mongoose.model('Campground', campgroundSchema);