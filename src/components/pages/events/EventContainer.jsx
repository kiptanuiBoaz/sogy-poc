import React from "react";
import EventsPage from "./EventsPage";
import EventsHeader from "./EventsHeader";
import "./events.css"

function EventContainer(){
    return(
        <section className="eventsContainer">
            <div>
                <EventsHeader/>
                <EventsPage/>
            </div>
            

        </section>
    )

}

export default EventContainer;