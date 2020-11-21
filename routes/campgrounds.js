const express = require('express');

const router = express.Router();

const campgroundsCtrl = require('../controllers/campgrounds');

router.get('/campgrounds', campgroundsCtrl.index);

router.get('/:id', campgroundsCtrl.show);

// POST /facts
// We will already have access to the logged in student on
// the server, therefore do not use: /students/:id/facts
router.post('/campgrounds', campgroundsCtrl.addCampground);

// DELETE /facts/:id
router.delete('/campgrounds/:id', campgroundsCtrl.delCampground);

module.exports = router;



