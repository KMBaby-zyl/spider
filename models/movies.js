var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

/*
 *
 */


var MoviesSchema = new Schema({
    title: {type: String},
    des: {type: String},
    href: {type: String},
    img: {type: String},
    score: {type: Number}
});

// 建立索引
// MessageSchema.index(title: '');

mongoose.model('Movies', MoviesSchema);




