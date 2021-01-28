var fetch = require('node-fetch');

const bluebird  = require('bluebird');

//Using redis as a backend database to store the jobs returned by the fetch algorithm
const redis = require('redis'); 
//redis is a in memory data store [not persistent as databases]
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

    console.log('Found allJobs length is: ' , allJobs.length);
    //filter algorithm to get only junior level jobs
    //This algo filters out sr level, manager, architect jobs 
    //from the API returned and only populates the DB with required jobs

    const jrJobs = allJobs.filter(job=>{
        const jobTitle  = job.title.toLowerCase();
        if(
            jobTitle.includes('senior')||
            jobTitle.includes('sr.') ||
            jobTitle.includes('manager') ||
            jobTitle.includes('designer') ||
            jobTitle.includes('architect') ||
            jobTitle.includes('frontend')|| jobTitle.includes('lead')||
            jobTitle.includes('head') || jobTitle.includes('experienced')
        ){
            return false;
        }
        return true;
    });
    const srJobs = allJobs.filter(job=>{
        const jobTitle  = job.title.toLowerCase();
        if(
            jobTitle.includes('senior')||
            jobTitle.includes('sr.') ||
            jobTitle.includes('manager') ||
            jobTitle.includes('designer') ||
            jobTitle.includes('architect') ||
            jobTitle.includes('frontend')|| jobTitle.includes('lead')||
            jobTitle.includes('devops')  ||
            jobTitle.includes('head') || jobTitle.includes('experienced')
        ){
            return true;
        }
        return false;
    });

    
    console.log('Filterd jobs : ' , jrJobs.length);
    const successFull = await setAsync('alljobs',JSON.stringify(allJobs));
    const success = await setAsync('jrjobs',JSON.stringify(jrJobs));
    const successsr = await setAsync('srjobs',JSON.stringify(srJobs));
    console.log({successFull});
    console.log({success});
    console.log({successsr});
    const companiesAndLoc = await setAsync('companies',JSON.stringify(totalComp));
    console.log({companiesAndLoc});
}
//fetchGithub();

module.exports = fetchGithub;