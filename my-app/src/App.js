import './App.css';
import React from 'react';

import Jobs from './components/jobs';

//mock state
const mockJobs = [
  {
    "title" : "SWE 1",
    "company": "Google"
  },
  {
    "title" : "SWE 1",
    "company": "Facebook"
  },
  {
    "title" : "SWE 1",
    "company": "Amazon"
  },
]
//api call url
const JOB_API_URL = 'http://localhost:3001/jobs';

async function fetchJobs(updateCb){
  const res =await fetch(JOB_API_URL);
  const jslol = await res.json();
  console.log({jslol});
  updateCb(jslol);
}


function App() {
  const [jobList,updateJobs] = React.useState([]);
  //React hook
  React.useEffect(()=>{
    fetchJobs(updateJobs);
    
  },[]);

  return (
    <div className="App">
      <h4> My app</h4>
      <Jobs mockjobs={jobList} />
    </div>
  );
}

export default App;
