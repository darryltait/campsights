// require our modules and initialize settings variables
const express = require('express');
const port = 3000;

const morgan = require('morgan');
const methodOverride = require('method-override');
const session = require('express-session');
const passport = require('passport');

require('dotenv').config();

// create the express app
const app = express();

// configure server settings
require('./config/database');
require('./config/passport');

// require our routes
const indexRouter = require('./routes/index');
const campgroundsRouter = require('./routes/campgrounds');
const reviewsRouter = require('./routes/reviews');
 

app.set('view engine', 'ejs');


// mount middleware
app.use(morgan('dev'));
app.use(methodOverride('_method'));
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

// require our routes
// const indexRouter = require('./routes/index');
// const campgroundsRouter = require('./routes/campgrounds');
// const reviewsRouter = require('./routes/reviews');



// mount routes
app.use('/', indexRouter);
app.use('/', reviewsRouter);
app.use('/campgrounds', campgroundsRouter);


// tell the app to listen
app.listen(port, function(){
    console.log(`Express is listening on port: ${port}`);
});