var request = require('request');
var user_agent = require('../../../utils/user_agent.js');
var cheerio = require('cheerio');
var Movies = require('../../../models').Movies;

var citylist = ['sh'];

// 得到美团的所有电影
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
                console.log(list.length);
                list.map(function(){
                    var i = {
                        title: $(this).find('h3').html(),
                        des: $(this).find('span').html(),
                        meituan_url: $(this).attr('href'),
                        img: $(this).find('img').attr('src')
                        update_at: new Date()
                    };
                    movies.push(i);
                    var m = new Movies(i);
                    m.save();
                });
                return;
        }
    })
};


