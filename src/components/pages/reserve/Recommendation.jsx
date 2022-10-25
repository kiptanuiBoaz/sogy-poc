import React from "react";
import Fade from 'react-reveal/Fade';

function Recommendation(){
    return(
        <div className="recommendation">
        <Fade delay={1000} top big cascade>
          <h1><span>"</span>This is a nice plact to stay. Make reservations now! We are the best in the business.<span>"</span></h1>
        </Fade> 
        <Fade  delay={1500} left>
            <h3><span>&#x301C;</span>JACK POWER</h3>
            <p>CEO</p>
        </Fade>
       
      </div>
    )
}

export default Recommendation;