import React from "react";
import events from "../../assets/events";
import Fade from 'react-reveal/Fade';

function EventsPage() {
    return (
      <Fade left cascade>
      <section className="events">
        {
          events.map((event)=>{
            return(
              <div>
                <div className="left">
                  <img src ={event.image.src} alt ={event.image.alt}/>
                  <h1>	&#160;<span>{event.venue}</span>	&#160;</h1>
                </div>
                
                <div className="right">
                  <h2>{event.date}</h2>
                  <h1>{event.theme}</h1>
                  <p>{event.description}</p>
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