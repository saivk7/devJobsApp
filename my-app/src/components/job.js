import React from 'react';

function Job({mockjob}){
    return(
        <div className="job">

            <p> {mockjob.title} : {mockjob.company}</p>
            


        </div>
    )
}


export default Job;