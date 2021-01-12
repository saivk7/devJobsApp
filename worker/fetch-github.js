var fetch = require('node-fetch');

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
    }
    
    console.log('Final allJobs : ' , allJobs.length);
}
//fetchGithub();

module.exports = fetchGithub;