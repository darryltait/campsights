// require our modules
const mongoose = require('mongoose');
// create a shortcut variable
const Schema = mongoose.Schema;

// define commentSchema
const reviewSchema = new Schema({
    text: String,
    campground: {type: Schema.Types.ObjectId, ref: 'Campground'},
    createdBy: {type: Schema.Types.ObjectId, ref: 'Camper'},
}, 
    {timestamps: true});