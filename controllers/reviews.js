const Camper = require('../models/camper');
const Campground = require('../models/campground');

// ADD REVIEW CAPABILITY LATER

// module.exports = {

//     create,
// }

// function create(req,res){
//     //req.body.campgroundId = req.params.id;
//     Campground.findById(req.params.id, function(err, campground){
//         req.body.userId = req.user._id;
//         req.body.createdBy = req.user.name;

//         campground.reviews.push(req.body);
//         campground.save(function(err) {
//             console.log(campground.reviews);
//             res.redirect(`/campgrounds/${campground._id}`);
//         });
//     });
// }

