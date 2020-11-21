// require our modules- express, index controller
const express = require('express');

const passport = require('passport');



const indexCtrl = require('../controllers/index');

// create our router object
const router = express.Router();

// login route - when the user clicks 'login with google'
router.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}));
// this route is for when google finishes validating user creds
// they will use this route to bring them back to us
router.get('/oauth2callback', passport.authenticate('google', {
    // change success redirect to where?
    successRedirect: '/',
    failureRedirect: '/'
}));

router.get('/logout', function(req,res){
    req.logOut();
    res.redirect('/');
});

// define our routes
router.get('/', indexCtrl.index);

/*  
router.get('/', function(req, res) {
    res.render('index');
  });
*/

// export the router object
module.exports = router;