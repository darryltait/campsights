const Camper = require('../models.camper');

module.exports = {
    index,
   
}

function index(req, res) {
    console.log(req.user);
    Camper.find({}, function (err, campers) {
        res.render('campers/index', {
            campers,
            user: req.user
        });
    });
}