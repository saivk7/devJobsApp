import React from 'react'

import Job from './job';
import TestCard from './testCard';
import MobileStepper from "@material-ui/core/MobileStepper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import Fade from 'react-reveal/Fade';
const steps = [
    {
      label: "cat 1",
      imgPath: "http://placekitten.com/200/200"
    },
    {
      label: "cat 2",
      imgPath: "http://placekitten.com/199/199"
    },
    {
      label: "cat 3",
      imgPath: "http://placekitten.com/201/201"
    }
];




function Jobs(/* {mockjobs} */){
  
  //stepper
  const [activeStep, setActiveStep] = React.useState(0);
    
  const [itemNum, setItemNum] = React.useState(0);
    
  const step = 20;

  
  const handleBack = () => {
        setActiveStep(prevActiveStep => prevActiveStep - 1);
        setItemNum(itemNum=>itemNum-step);
        //window.scrollTo(0, 0)
  };

  //jobs
  const [jobList,updateJobs] = React.useState([]);
  //React hook
  React.useEffect(()=>{
    fetchJobs(updateJobs);
    
  },[]);
  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);
  const [lastClicked, setLastClicked] = React.useState(0);
  const [name,setName] = React.useState('All');

  const JOB_API_URL1 = `http://localhost:3001/alljobs`;
  const JOB_API_URL2 = 'http://localhost:3001/jrjobs';
  const JOB_API_URL3 = 'http://localhost:3001/srjobs';
  const [url,setUrl] = React.useState(JOB_API_URL1);

  async function fetchJobs(updateCb){
    const res =await fetch(url);
    const jslol = await res.json();
    console.log({jslol});
    updateCb(jslol);
  }

  const changeJob = (num) =>{
    setLastClicked(num);
    if(num==1){
      setName("Junior");
      setUrl(JOB_API_URL2);
      console.log(url);
      fetchJobs(updateJobs);
      
    }else if(num==2){
      setName("Senior");
      setUrl(JOB_API_URL3);
      console.log(url);
      fetchJobs(updateJobs);

    }else{
      setName("All");
      setUrl(JOB_API_URL1);
      console.log(url);
      fetchJobs(updateJobs);

    }
  }

  
  const maxSteps = Math.ceil(jobList.length/step);
  const len = jobList.length;
  const handleNext = () => {
  setActiveStep(prevActiveStep => prevActiveStep + 1);
        setItemNum(itemNum=>itemNum+step);
        window.scrollTo(0, 0)
  };  
  
  return(
      <div id="devJobs" className="container" style={{zIndex:"2"}}>
        
        <div>
          <div  className="container">
          <div className="row row-content">
            <div className="col-12">
              <h1> 
                <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                  <DropdownToggle caret>
                    {name} Jobs
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem header>Select Level</DropdownItem>
                    <DropdownItem onClick={()=>changeJob(0)}>All</DropdownItem>
                    <DropdownItem onClick={()=>changeJob(1)}>Junior</DropdownItem>
                    <DropdownItem onClick={() =>changeJob(2)}>Senior</DropdownItem>
                    <DropdownItem disabled>More Filters Coming Soon!</DropdownItem>
                    <DropdownItem divider />
                    {/* <DropdownItem>Foo Action</DropdownItem>
                    <DropdownItem>Bar Action</DropdownItem>
                    <DropdownItem>Quo Action</DropdownItem> */}
                  </DropdownMenu>
                </Dropdown> {name} Software Developer Jobs
                
              </h1>
            </div>
          </div>

        <h3> Total jobs found {jobList.length}</h3>
          {
          mockJobDisplay(jobList.slice(activeStep,activeStep+step),itemNum)
          }
          </div>

                {/* <img src={steps[activeStep].imgPath} alt={steps[activeStep].label} /> */}
                <MobileStepper
                    steps={maxSteps}
                    position="static"
                    variant="text"
                    activeStep={activeStep}
                    nextButton={
                    <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                        Next
                    <KeyboardArrowRight />
                    </Button>
                    }
                    backButton={
                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                        <KeyboardArrowLeft />
                        Back
                    </Button>
                    }
                />
        </div>
      </div>
);
}

var mockJobDisplay = (mockjobs,itemNum) =>{
    
    return (mockjobs.map(job=>{
            itemNum+=1;
            return(

            //this contains each job
            //<Job mockjob={job} itemNum ={itemNum} />
            <Fade Bottom>
              <div  className= "row row-content">
                <div style={{display:"grid", justifyContent:"center"}} className="col-12 ">
                  <TestCard mockjob={job} itemNum = {itemNum}/>
                </div>
              </div>
            </Fade>

            
            );}
    ));

}



export default Jobs;