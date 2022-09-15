import React from "react";
import "./reservations.css"

export const Reservations = () => {
    return(
        <section className="reservations">
            <h1><span className="dash">-</span>Reservations<span  className="dash">-</span></h1>
        
            <form className="room-form">
                <label  > Name</label>
                <input className="name-input" type="text"/>

                <label > Phone</label>
                <input className="phone-input" type="tel"/>

                <label >Email</label>
                <input className="email-input" type="email"/>
                
                <label > Check In</label>
                <input className="date-input" type="date"/>

                <label > Check Out</label>
                <input className="date-input" type="date"/>

                <label >Adults</label>
                <input className="people-input" type="number"/>

                <label  >Children</label>
                <input className="people-input" type="number"/>

                <label   class="switch">
                    <span>Will you be bringing pets</span>
                    <input  type="checkbox" />
                    <span class="slider round"></span>
                </label>
            
                
            </form>
        </section>
    )
}
