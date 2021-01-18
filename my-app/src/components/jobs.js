import React from 'react';

import Job from './job';

import MobileStepper from "@material-ui/core/MobileStepper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";


function Jobs({mockjobs}){
    return(
        <div>
            
            <h1>
                Software Developer Entry Level Roles
            </h1>
            {
                mockJobDisplay(mockjobs)
            }
            

        </div>
    )
}

var mockJobDisplay = (mockjobs) =>{
    var itemNum=0;
    return (mockjobs.map(job=>{
            itemNum+=1;
            return(

            //this contains each job
            <Job mockjob={job} itemNum ={itemNum} />
            
            );}
    ));

}



export default Jobs;