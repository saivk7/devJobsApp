import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';




const JobModal = ({job})=>{

    return(
        <div>
            <img style={{maxHeight:"65%", maxWidth:"50%"}} src={job.company_logo} />
            <div dangerouslySetInnerHTML={{__html: job.description}}/>
            <div></div>
        </div>
        
        
    );


}

export default JobModal;