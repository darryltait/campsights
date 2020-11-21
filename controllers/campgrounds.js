
const Campground = require('../models/campground');

module.exports = {
    index,
    addCampground,
    delCampground
};

function index(req,res) {
    Campground.find({}, function(err,campgrounds) {
        res.render('campgrounds/index', {campgrounds});
    });
}

function addCampground(req,res) {

}

function delCampground(req,res) {
    
}