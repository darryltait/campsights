const Campground = require('../models/campground');

module.exports = {

    index,

};


function index(req,res) {
    Campground.find({}, function(err, campgrounds) {
        res.render('index', {

            campgrounds,
        });

    });
}