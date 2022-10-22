import React from "react";
import events from "../../assets/events";
import Fade from 'react-reveal/Fade';

function EventsPage() {
    return (
      <Fade left cascade>
      <section className="events">
        {
          /* mapping throught the events array */
          events.map(({image:{src,alt},venue,date,theme,description,id})=>{
            /* destructuring the event */
            return(
              <div key={id}>
                <div className="left">
                  <img src ={src} alt ={alt}/>
                  <h1>	&#160;<span>{venue}</span>	&#160;</h1>
                </div>
                
                <div className="right">
                  <h2>{date}</h2>
                  <h1>{theme}</h1>
                  <p>{description}</p>
                </div>
                
              </div>
            )
          })
        }

      </section>
      </Fade>
      
     
    )
};
  
export default EventsPage;