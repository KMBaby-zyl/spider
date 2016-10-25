var cSpider  = require('./project/ctrip/spider');
var king = require('./king/index.js');

var projectId = ctrip;
var options = {
    start: 428500,
    offset: 500,
    page: 5
};

king(cSpider, options)
