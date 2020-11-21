const Camper = require('../models.camper');

module.exports = {
    // index,
    addReview,
   
}

// function index(req, res) {
//     console.log(req.user);
//     Camper.find({}, function (err, campers) {
//         res.render('campers/index', {
//             campers,
//             user: req.user
//         });
//     });
// }

    function addReview(req,res) {
        req.user.reviews.push(req.body);
        req.user.save(function(err) {
            res.redirect('/campgrounds/show');
        });
    }