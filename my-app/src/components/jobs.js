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

function Jobs({mockjobs}){
  const [activeStep, setActiveStep] = React.useState(0);
    
  const [itemNum, setItemNum] = React.useState(0);
    
  const step = 20;

  const maxSteps = Math.ceil(mockjobs.length/step);
  const len = mockjobs.length;
  const handleNext = () => {
  setActiveStep(prevActiveStep => prevActiveStep + 1);
        setItemNum(itemNum=>itemNum+step);
        window.scrollTo(0, 0)
  };  
  
  const handleBack = () => {
        setActiveStep(prevActiveStep => prevActiveStep - 1);
        setItemNum(itemNum=>itemNum-step);
        //window.scrollTo(0, 0)
  };
  
  return(
      <div id="devJobs" className="container">
        <h1> Software Developer Entry Level Roles </h1>
        <h3> Total jobs found {mockjobs.length}</h3>
        
        <div>
          <div  className="container">
          {
          mockJobDisplay(mockjobs.slice(activeStep,activeStep+step),itemNum)
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