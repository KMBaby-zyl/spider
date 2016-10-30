//var cSpider  = require('./project/ctrip/spider');
var cSpider  = require('./project/movies/spider');
var king = require('./king/index.js');

var projectId = 'ctrip';
var options = {
    start: 428500,
    offset: 1,
    page: 1
};
cSpider();
//king(cSpider, options)
