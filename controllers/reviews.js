const Camper = require('../models/camper');

module.exports = {

    create,
}

function create(req,res){
    req.body.campgroundId = req.params.id;
    Camper.findById(req.user.id, function(err, camper){
        camper.reviews.push(req.body);
        camper.save(function(err) {
            res.redirect(`/campgrounds/${req.params.id}`);
        });
    });
}