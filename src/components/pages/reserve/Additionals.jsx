import React from "react";
import Fade from 'react-reveal/Fade';

function Additionals(){
    return(
        <div className="additionals">
        <Fade right cascade>
          <h1>We also offer</h1>
          <ul >
        
            <li><span>&#10004;</span> Gym facilities</li>
            <li><span>&#10004;</span> Children amusement</li>
            <li><span>&#10004;</span> Pool tables & Bowling</li>
          
          </ul>
          </Fade>
        </div>
    )

}

export default Additionals;