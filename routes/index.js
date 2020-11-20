// require our modules- express, index controller
const express = require('express');

const indexCtrl = require('../controllers/index');

// create our router object
const router = express.Router();

// define our routes
router.get('/', indexCtrl.index);

// export the router object
module.exports = router;