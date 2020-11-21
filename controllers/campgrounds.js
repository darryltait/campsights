
const Campground = require('../models/campground');

module.exports = {
    index,
    show,
    addCampground,
    delCampground
};

function index(req,res) {
    Campground.find({}, function(err,campgrounds) {
        res.render('campgrounds/index', {campgrounds});
    });
}

function show(req,res) {
    Campground.findById(req.params.id, function(err, campground){
        res.render('campgrounds/show', {
            campground
        })
    });
}

function addCampground(req,res) {

}

function delCampground(req,res) {

}