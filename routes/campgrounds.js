const express = require('express');

const router = express.Router();

const campgroundsCtrl = require('../controllers/campgrounds');

//router.get('/campgrounds', campgroundsCtrl.index);

router.get('/campgrounds/:id', campgroundsCtrl.show);

// POST /facts
// We will already have access to the logged in student on
// the server, therefore do not use: /students/:id/facts
//router.post('/campgrounds', campgroundsCtrl.addCampground);


module.exports = router;



