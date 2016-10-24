var request = require('request');

module.exports = function (hotelID, authKey){
    var authKey = authKey;
    var hotelID = hotelID;
    var url = 'http://hotels.ctrip.com/Domestic/tool/AjaxHotelCommentList.aspx?MasterHotelID=' +
                hotelID + '&hotel=' +
                hotelID + '&NewOpenCount=' +
                '0' +'&AutoExpiredCount=' +
                '3392' +'&RecordCount=' +
                '13991' + '&OpenDate= ' +
                '2013-01-01' + '&abForComLabel=' +
                'False' + '&card=' +
                '-1' + '&property=' +
                '-1' + '&userType=' +
                '-1' + '&productcode=&keyword=&roomName=&orderBy=' +
                '2' + '&currentPage=' +
                '4' + '&viewVersion=c&contyped=0&eleven='+
                authKey + '&callback=CASRvunwfTabfcxrq&_=' + new Date().getTime();

    console.log(url);
    request({
        uri: url,
        method: 'GET',
        headers: {
            Host: 'hotels.ctrip.com',
            referer: 'http://hotels.ctrip.com/hotel/' + hotelID + '.html',
            Pragma: 'no-cache',
            Connection: 'keep-alive',
            'Cache-Control': 'no-cache',
            'If-Modified-Since': 'Thu, 01 Jan 1970 00:00:00 GMT',
            'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36',
            Cookie: '_abtest_userid=95daff6b-91ed-45c4-b041-9c6c68555150; adscityen=Shanghai; _gat=1; _bfa=1.1477279667343.11zxjd.1.1477279667343.1477279667343.1.4; _bfs=1.4; HotelDomesticVisitedHotels1=' +
            hotelID+ '=0,0,4.4,13983,/hotel/1000/9/a934a9d22fc6430fbddabca9705519a1.jpg,; __zpspc=9.1.1477279682.1477279935.3%234%7C%7C%7C%7C%7C%23; _ga=GA1.2.154186463.1477279681; MKT_Pagesource=PC; appFloatCnt=3; _jzqco=%7C%7C%7C%7C1477279682696%7C1.584925194.1477279682300.1477279684646.1477279935317.1477279684646.1477279935317.undefined.0.0.3.3; manualclose=1; _bfi=p1%3D102003%26p2%3D102003%26v1%3D4%26v2%3D3'
        }
    }, function(error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body);
            return;
        }
    })
}