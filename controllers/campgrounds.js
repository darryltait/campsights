
const Campground = require('../models/campground');
// const Camper = require('../models/camper');

const reviews = require('./reviews');

module.exports = {
    index,
    new: newCampground,
    create,
    show,
    delete: deleteCampground,
    
};

function index(req,res) {
    Campground.find({}).populate('createdBy').exec(function(err, campgrounds) {
        console.log(campgrounds);
        res.render('campgrounds/index', {
            campgrounds,
            user: req.user
        });
    });
}

function newCampground(req, res){
    res.render('campgrounds/new', { user: req.user});
}

function create(req,res){
    req.body.createdBy = req.user._id;
    Campground.create(req.body, function(err, campground){
        res.redirect('/campgrounds');
    });

}

function show(req,res) {
    Campground.findById(req.params.id)
    .populate('createdBy').exec(function(err, campground){
        console.log(campground);
        res.render('campgrounds/show', {campground, user: req.user});
    });
}

function deleteCampground(req,res) {
    Campground.findByIdAndDelete(req.params.id, function(err, campground) {
        if(err) {
            console.log(err)
        } else{
            console.log('deleted: ', campground);
            res.redirect('/campgrounds');
        }
    });
}

// function show(req,res) {
//     Campground.findById(req.params.id, function(err, campground){
//         console.log(campground);
//         res.render('campgrounds/show', {campground, user: req.user});
//     });
// }



// function show(req,res) {
//     Campground.findById(req.params.id, function(err, campground){
//         Camper.find({}, function(err, campers){
//             //let reviewsArr = [];
//             let reviewsArr = [];
//             let namesArr = [];
            
//             campers.forEach(function(camper){
//                 let name = camper.name;
//                 camper.reviews.forEach(function(rev){
//                     //if(rev.campgroundId == campground._id){
//                         //if(rev.campgroundId == '5fb8794c4df31baeca70b223'){
//                         if(rev.campgroundId == req.params.id){

//                         console.log(rev.campgroundId, name); //will print the campgroundId
//                         //console.log('reqparamsid', req.params.id); - prints reqparamsid
//                         //console.log(campground._id);  // prints the first campgroundID = 5fb876954df31baeca70b222
//                         //console.log(req.params.id);  // prints the above ^
//                         reviewsArr.push(rev);
//                         namesArr.push(name);

//                         //console.log(reviewsArr)

//                     } //else {
//                     //     reviewsArr.push(rev);
//                     //     console.log(reviewsArr)

//                     // }
//                 }) 
                
//                 //console.log(reviewsArr);
//             }); 
//             res.render('campgrounds/show', {
//                 campground,
//                 user: req.user,
//                 reviewsArr,
//                 namesArr
    
//             });
//         });
       
//     });
// }


