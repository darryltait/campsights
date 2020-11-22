
const Campground = require('../models/campground');

const Camper = require('../models/camper');
const reviews = require('./reviews');

module.exports = {
    index,
    show,
    
};

function index(req,res) {
    Campground.find({}, function(err,campgrounds) {
        res.render('campgrounds/index', {campgrounds});
    });
}

function show(req,res) {
    Campground.findById(req.params.id, function(err, campground){
        Camper.find({}, function(err, campers){
            //let reviewsArr = [];
            let reviewsArr = [];
            campers.forEach(function(camper){
                camper.reviews.forEach(function(rev){
                    //if(rev.campgroundId == campground._id){
                        //if(rev.campgroundId == '5fb8794c4df31baeca70b223'){
                        if(rev.campgroundId == req.params.id){

                        console.log(rev.campgroundId); //will print the campgroundId
                        console.log('reqparamsid', req.params.id);
                        //console.log(campground._id);  // prints the first campgroundID = 5fb876954df31baeca70b222
                        //console.log(req.params.id);  // prints the above ^
                        reviewsArr.push(rev);

                        //console.log(reviewsArr)

                    } //else {
                    //     reviewsArr.push(rev);
                    //     console.log(reviewsArr)

                    // }
                }) 
                
                //console.log(reviewsArr);
            }); 
            res.render('campgrounds/show', {
                campground,
                user: req.user,
                reviewsArr
    
            });
        });
       
    });
}

