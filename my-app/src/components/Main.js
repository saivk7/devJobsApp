import '../App.css';
import React from 'react';

import Jobs from './jobs';
import Navig from './headerComponent';
import Home from './homeComp';
import ParticlesDiv from './particlesComponent';
import Contact from './ContactComponent';
import Footer from './footerComponent';
//mock state
import { Switch, Route , Redirect, withRouter, BrowserRouter } from 'react-router-dom';

/* const mockJobs = [
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
] */
//api call url
/* const JOB_API_URL = 'http://localhost:3001/jobs';

async function fetchJobs(updateCb){
  const res =await fetch(JOB_API_URL);
  const jslol = await res.json();
  console.log({jslol});
  updateCb(jslol);
}
needs to be inside main func// moved to jobs component for convinience
const [jobList,updateJobs] = React.useState([]);
//React hook
React.useEffect(()=>{
  fetchJobs(updateJobs);
  
},[]); */

function Main() {
  


  return (
    
    <div>
      <ParticlesDiv />
      <div  className="App container">

          <Navig />
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route path="/jobs" component={()=> <Jobs   />} />
          {/* <Route path="/aboutUs" component={}/> */}
          <Route exact path="/contactus" component={Contact} />
        </Switch>
        <Redirect to="/home" />
        <Footer />


        
      </div>
      
    </div>




  );
}

export default withRouter(Main);
