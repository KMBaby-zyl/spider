var request = require('request');

var location = {};

var CASIwflvOlQSYEogvd = function(f){
    console.log(f);
}

var url1 = 'http://hotels.ctrip.com/domestic/cas/oceanball?callback=CASIwflvOlQSYEogvd'
var url2 = 'http://hotels.ctrip.com/Domestic/tool/AjaxHotelCommentList.aspx?MasterHotelID=1806143&hotel=1806143&NewOpenCount=0&AutoExpiredCount=893&RecordCount=3883&OpenDate=&abForComLabel=False&card=-1&property=-1&userType=-1&productcode=&keyword=&roomName=&orderBy=2&currentPage=4&viewVersion=c&contyped=0&eleven=26763600497b2ec423b602a9b6bfbef9&callback=CASRXcuCgQszfLRsK&_=1477033132763';
request(url1, function(error, response, body) {
    if (!error && response.statusCode == 200) {
        var result = step1(body);
        console.log(result);
        var hotel_id = 'id';
        this.location = {};
        this.location.href =  'http://hotels.ctrip.com/hotel/' + hotel_id+ '.html';
        // eval(result);
    }
})

RegExp.quote = function(str) {
    return str.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
};

// var body = 'eval(function(arr,f){if(typeof Array.prototype.map==="function"){return arr.map(f)}var res=[],j=0;for(var i=0,l=arr.length;i<l;i++){res[j++]=f(arr[i],i,arr)}return res}([1,2,3,4,5], function(item){return String.fromCharCode(item-3333)}));';
// var result = step1(body);
// console.log(result)

function step1(body){
    var s1 = RegExp.quote('eval(function(arr,f){if(typeof Array.prototype.map==="function"){return arr.map(f)}var res=[],j=0;for(var i=0,l=arr.length;i<l;i++){res[j++]=f(arr[i],i,arr)}return res}(');
    var s2 = RegExp.quote(',function(item){return String.fromCharCode(item-') + '(.*)' + RegExp.quote(')}');
    var reg = new RegExp(s1 + '(.*)' + s2);
    console.log(reg);
    var r1 = body.match(reg)[1];
    var r2 = body.match(reg)[2];

    var r = eval(r1).map(function(item){return String.fromCharCode(item - r2)}).join('');
    return r;
}