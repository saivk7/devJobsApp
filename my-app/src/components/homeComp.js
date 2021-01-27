import React from 'react';
import {Jumbotron} from 'reactstrap';
import Typical from 'react-typical';
import {Link } from 'react-router-dom';
const Home = () =>{

    return(
        <div>
            <Jumbotron style={{ background:'transparent'}}>
            <div className="container " >
                <div className="row row-header align-middle">
                <div className="col-12">
                    <h1 mt-3>Job search can be <Typical
                    steps={[100,"Hard",2000,"Frustrating",2500,"Enervating",3000]}
                    loop={Infinity}
                    wrapper='h1'
                    />
                    <br></br>
                    </h1>
                            <h3>
                                We bring selected Devloper Jobs from all around the World
                                to you and ensure a smooth application experience
                            </h3>
                        <br></br>
                    <h2>Start your Developer Job Search <Link to="/jobs"> Here</Link> </h2>
                    

                </div>
                
                </div>
                
            </div>
            </Jumbotron>

        </div>
    );
}


export default Home;