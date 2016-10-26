var mongoose = require('mongoose');
var config = require('../config');

mongoose.connect(config.db, {
    server: {poolSize: 20}
});    

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));


db.once('open', function() {
    console.log('success connect mongodb');
});


// models
require('./movies');

exports.Movies = mongoose.model('Movies');

