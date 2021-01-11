import React from 'react';

import Job from './job';


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
    return (mockjobs.map(
        job=> <Job mockjob={job} />
    ));

}



export default Jobs;