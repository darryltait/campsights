const passport = require('passport');
const Camper = require('../models/camper');

const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
}, function(accessToken, refreshToken, profile, cb) {
    // a camper has logged in to Google
    Camper.findOne({googleId: profile.id}, function(err, camper){
        if(err) return cb(err);
        if(camper) {
            return cb(null, camper)
        } else {
            const newCamper = new Camper({
                name: profile.displayName,
                email: profile.emails[0].value,
                googleId: profile.id
            });

            newCamper.save(function(err){
                if(err) return cb(err);
                return cb(null, camper);
            });
        }
    });
    // check if camper exists in our db
    
    // if user exists, we log them in
    // if not, we create a new user and then log them in

}));

passport.serializeUser(function(camper, done){
    done(null, camper);
});

passport.deserializeUser(function(id, done){
    Camper.findById(id, function(err, camper){
        done(err, camper)
    });
});