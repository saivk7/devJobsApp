import React from 'react';

import  { Paper,Typography } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
function Job({mockjob,itemNum}){
    return(
        <Paper className="joblol" elevation={4}  color='primary' >
{/*             <Typography class="serial-num"> Job No. {itemNum} </Typography> */}
            <div className="job-title">
            <Typography class="title" > Title: {mockjob.title}</Typography>          
            <Typography >Comapny :{mockjob.company}</Typography>
            </div>
            <div justify-content="flex-end">
            <Typography> <LocationOnIcon color="secondary" />  {mockjob.location}</Typography>
            <Typography> Posted on : {mockjob.created_at}</Typography>
            </div>
            
        </Paper>
    )
}


export default Job;