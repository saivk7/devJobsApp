var fetch = require('node-fetch');

const bluebird  = require('bluebird');

//
const redis = require('redis'); //redis is a in memory data store [not persistent as databases]
const client = redis.createClient();
//checking  if it connected or not
client.on('connect', function() {
  console.log('connected to redis succesfully!');
  bluebird.promisifyAll(client);
  console.log('promisified!')
});

const { promisify } = require("util");
const getAsync = promisify(client.get).bind(client);
const setAsync = promisify(client.set).bind(client);

const baseURL = 'https://jobs.github.com/positions.json';

var jobs;

async function oldFetchGithub(){
    fetch(baseURL)
    .then((res)=>{
        console.log({res});
        return res;
    })
    .then((res)=>{
        jobs = res.json();
        return jobs;
    })
    .then(jobs=>{
        //console.log({jobs});
        const companies = jobs.map(job=>{
            return {name: job.company , location: job.location};
        });
        console.log(companies);
        console.log("Found companies no. :", companies.length);

        console.log(jobs.length);
    })
    .catch(err=>console.log(err));

    

}
var totalComp = [];
async function fetchGithub(){
    var onPage = 0;
    let resultCount =1;
    const allJobs = [];
    while(resultCount>0){
        const res = await fetch(`${baseURL}?page=${onPage++}`);
        //console.log({res});
        const jobs = await res.json();
        allJobs.push(...jobs);
        console.log("Got Jobs: " , jobs.length);
        resultCount = jobs.length;
        const companies = await jobs.map(job=>{
            return {name: job.company , location: job.location};
        });
        //console.log(companies);
        totalComp.push(companies);
        console.log("Found companies no. :", companies.length);
    }
    
    console.log('Final allJobs : ' , allJobs.length);

    const success = await setAsync('github',JSON.stringify(allJobs));
    console.log({success});
    const companiesAndLoc = await setAsync('companies',JSON.stringify(totalComp));
    console.log({companiesAndLoc});
}
//fetchGithub();

module.exports = fetchGithub;