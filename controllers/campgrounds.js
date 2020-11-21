
const Campground = require('../models/campground');

// const Camper = require('../models/camper');

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
            campground,
            user: req.user

        });
    });
}

function addCampground(req,res) {

}

function delCampground(req,res) {

}