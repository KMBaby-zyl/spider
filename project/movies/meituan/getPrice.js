var request = require('request');
var user_agent = require('../../utils/user_agent.js');
var cheerio = require('cheerio');
var citylist = ['sh'];


// 得到美团的所有价格
module.exports = function (){

    var url = 'http://' + citylist[0] + '.meituan.com/dianying';

    request({
        uri: url,
        method: 'GET',
        headers: {
            'Cache-Control': 'no-cache',
            'User-Agent': user_agent.default, 
        }
    }, function(error, response, body) {
        if (!error && response.statusCode == 200) {
            var $ = cheerio.load(body);
            var list = $('.reco-movieinfo__cover');
            var movies = [];
            list.map(function(item){
                movies.push({
                    title: list.find('h3').html(),
                    des: list.find('span').html()
                });
            });
            return;
        }
    })
};


