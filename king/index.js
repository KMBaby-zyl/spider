var sleep = require('sleep');

module.exports = function(spider, options){
    runlist.start = options.start;
    runlist.offset = options.offset;
    runlist.page = options.page;

    runlist.run(spider);
}


var runlist = {
    i: 0,
    j: 1,
    start: null,
    offset: null,
    page: null,

    run: function(spider){
        // var time = parseInt(Math.random()*10) + 1;
        var time = 1;

        console.log('----------等待' + time + '--------')
        sleep.sleep(time);

        if(this.i < this.offset || this.j < this.page){
            if(this.j == this.page){
                this.j = 1;
                this.i++;
            }else{
                this.j++;
            }

            var ID = this.i + this.start;

            console.log('----------ID' + ID + '--page:'+this.j+'------')

            spider(ID, this.j);

            return this.run(spider);
        }else{
            console.log('----------success--------')
            return true
        }

    }
}