import React from 'react';

import Particles from 'react-particles-js';
const ParticlesDiv = ()=>{
    return(
        <Particles
        style={{ position: "absolute" }}
        height="100%"
        width="100%"
        params={{
            particles: {
              color: {
                value: "#ff1a1a"
              },
              line_linked: {
                  "enable":false,
                color: {
                  value: "#ff4d4d"
                }
              },
              "move": {
	            "random": true,
	            "speed": 1.5,
	            "direction": "top",
	            "out_mode": "out"
	        },
              number: {
                value: 70
              },
              size: {
                value: 3
              }
            }
          }}
      />
    );
}

export default ParticlesDiv;