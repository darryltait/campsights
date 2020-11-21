const express = require('express');

const router = express.Router();

const reviewsCtrl = require('../controllers/reviews');

router.post('/campgrounds/:id/reviews', reviewsCtrl.create);

module.exports = router;