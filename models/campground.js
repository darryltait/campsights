
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// define reviewSchema
const reviewSchema = new Schema({
    text: String,
    createdBy: {type: Schema.Types.ObjectId, ref: 'Camper'},
}, 
    {timestamps: true});

// define our campgroundSchema
const campgroundSchema = new Schema({
    cgName: {
        type: String,
        required: true
    },
    location: {
        type: String,  
    },
    details: String,
    reviews: [reviewSchema],
    imageURL: String,
    createdBy: {type: Schema.Types.ObjectId, ref: 'Camper'},


}, {timestamps: true});

// export our schema as a model with mongoose.model
module.exports = mongoose.model('Campground', campgroundSchema);