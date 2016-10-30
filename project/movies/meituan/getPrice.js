var request = require('request');
var user_agent = require('../../utils/user_agent.js');
var cheerio = require('cheerio');
var citylist = ['sh'];


// 得到美团的所有价格
module.exports = function (url){
    
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
            var list = $('.J-cinema-item');
            var cinema = [];
            list.map(function(){
                cinema.push({
                    name: $(this).find('.link--black__greenu').html(),
                    address: $(this).find('.cinema-info-row__value').html(),
                    playtime: []
                });
            });
            return;
        }
    })
};


