var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

/*
 *
 */


var MoviesSchema = new Schema({
    title: {type: String},
    des: {type: String},
    meituan_url: {type: String},
    nuomi_url: {type: String},
    img: {type: String},
    score: {type: Number},
    update_at: {type: Date}
});

// 建立索引
MessageSchema.index({update_at: -1});

mongoose.model('Movies', MoviesSchema);




