const express = require('express');
const router = express.Router();

const campgroundsCtrl = require('../controllers/campgrounds');

//router.get('/campgrounds', campgroundsCtrl.index);

router.get('/', campgroundsCtrl.index);
router.get('/new', campgroundsCtrl.new);
router.get('/:id', campgroundsCtrl.show);
router.post('/', campgroundsCtrl.create);
router.delete('/:id', campgroundsCtrl.delete);
//try below
router.get('/:id/edit', campgroundsCtrl.edit);
router.put('/:id', campgroundsCtrl.update);


// POST /facts
// We will already have access to the logged in student on
// the server, therefore do not use: /students/:id/facts
//router.post('/campgrounds', campgroundsCtrl.addCampground);


module.exports = router;



