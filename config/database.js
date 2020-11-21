// require our modules (mongoose)
const mongoose = require('mongoose');

// set up our shortcut variable
const db = mongoose.connection;

// connect to the database server
mongoose.connect(process.env.DATABASE_URL || 'mongodb://localhost/campgrounds', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

// set up a connection listener
db.on('connected', function(){
    console.log(`Connected to mongodb on ${db.host}:${db.port}`);
});

db.on('error', function(err) {
    console.log(`Encountered an error: ${err.message}`);
});