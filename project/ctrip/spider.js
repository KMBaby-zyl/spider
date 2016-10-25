var request = require('request');
var getCommentList = require('./getCommentList.js');


RegExp.quote = function(str) {
    return str.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
};

// var body = 'eval(function(arr,f){if(typeof Array.prototype.map==="function"){return arr.map(f)}var res=[],j=0;for(var i=0,l=arr.length;i<l;i++){res[j++]=f(arr[i],i,arr)}return res}([1,2,3,4,5], function(item){return String.fromCharCode(item-3333)}));';
// var result = step1(body);
// console.log(result)

function step1(body, href) {
    var s1 = RegExp.quote('eval(function(arr,f){if(typeof Array.prototype.map==="function"){return arr.map(f)}var res=[],j=0;for(var i=0,l=arr.length;i<l;i++){res[j++]=f(arr[i],i,arr)}return res}(');
    var s2 = RegExp.quote(',function(item){return String.fromCharCode(item-') + '(.*)' + RegExp.quote(')}');
    var s3 = RegExp.quote('CASIwflvOlQSYEogvc' + '(new Function(\'return "\' + ') + '(.*)' + RegExp.quote(' + \'";\'));}();');
    var reg = new RegExp(s1 + '(.*)' + s2);
    var r1 = body.match(reg)[1];
    var r2 = body.match(reg)[2];
    var r = eval(r1).map(function(item) {
        return String.fromCharCode(item - r2) }).join('');

    // console.log(r);
    var r = r.replace(new RegExp(s3), 'new_callback($1);}();');
    var r = r.replace(/delete process;/, '');
    // console.log(r);

    r = r.replace(/this\.location\.href/gi, href);
    // console.log(r);

    return r;
}


module.exports = function (hotelID, page){


    var href = '"http://hotels.ctrip.com/hotel/' + hotelID + '.html"';
    var url1 = 'http://hotels.ctrip.com/domestic/cas/oceanball?callback=CASIwflvOlQSYEogvc&_=' + new Date().getTime();

    request({
        uri: url1,
        method: 'GET',
        headers: {
            Host: 'hotels.ctrip.com',
            referer: 'http://hotels.ctrip.com/hotel/' + hotelID + '.html',
            Pragma: 'no-cache',
            Connection: 'keep-alive',
            'Cache-Control': 'no-cache',
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36',
            Cookie: '_abtest_userid=95daff6b-91ed-45c4-b041-9c6c68555150; adscityen=Shanghai; _gat=1; _bfa=1.1477279667343.11zxjd.1.1477279667343.1477279667343.1.4; _bfs=1.4; HotelDomesticVisitedHotels1=' +
            hotelID +'=0,0,4.4,13983,/hotel/1000/9/a934a9d22fc6430fbddabca9705519a1.jpg,; __zpspc=9.1.1477279682.1477279935.3%234%7C%7C%7C%7C%7C%23; _ga=GA1.2.154186463.1477279681; MKT_Pagesource=PC; appFloatCnt=3; _jzqco=%7C%7C%7C%7C1477279682696%7C1.584925194.1477279682300.1477279684646.1477279935317.1477279684646.1477279935317.undefined.0.0.3.3; manualclose=1; _bfi=p1%3D102003%26p2%3D102003%26v1%3D4%26v2%3D3'
        }
    }, function(error, response, body) {
        if (!error && response.statusCode == 200) {
            var result = step1(body, href);
            console.log(result);
            var new_callback = function(authkey) {
                // console.log(f);

                getCommentList(hotelID, authkey, page);
            }

            eval(result);

        return;
    }
    })
};


