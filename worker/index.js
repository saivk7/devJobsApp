var CronJob = require('cron').CronJob;
var job = new CronJob('* * * * * *', function() {
    
  console.log('You will see this message every second', lol() );
}, null, true, 'America/Los_Angeles');
job.start();

var lol  = ()=>{
    var curr = new Date;
    var time = curr.getHours() + ":" + curr.getMinutes() + ":" + curr.getSeconds();
    return time;
}