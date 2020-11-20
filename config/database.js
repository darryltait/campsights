// require our modules (mongoose)
const mongoose = require('mongoose');

// set up our shortcut variable
const db = mongoose.connection;

// connect to the database server
mongoose.connect('mongodb://localhost/campgrounds', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

// set up a connection listener
db.on('connected', function(){
    console.log(`Connected to mongodb on ${db.host}:${db.port}`);
});