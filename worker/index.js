const fetchGithub = require('./fetch-github');

var CronJob = require('cron').CronJob;


var job = new CronJob('*/1 * * * *', ()=>{
  fetchGithub();
  console.log(lol());
}
  ,null);

/* 
var job2= new CronJob('* * * * * *', function() {
  fetchGithub();
  console.log('You will see this message every second', lol() );
}, null, true, 'America/Los_Angeles');
 */

job.start();

var lol  = ()=>{
    var curr = new Date;
    var time = curr.getHours() + ":" + curr.getMinutes() + ":" + curr.getSeconds();
    return time;
}