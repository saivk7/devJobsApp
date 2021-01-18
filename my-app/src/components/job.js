import React from 'react';

import  { Paper,Typography } from '@material-ui/core';

function Job({mockjob,itemNum}){
    return(
        <Paper className="joblol" elevation={4}  color='primary' >
            <Typography> Job No. {itemNum} </Typography>
            <Typography> Title: {mockjob.title}</Typography>          
            <Typography>Comapny: {mockjob.company}</Typography>
            <Typography> Location: {mockjob.location}</Typography>
            <Typography> Posted on : {mockjob.created_at}</Typography>

        </Paper>
    )
}


export default Job;