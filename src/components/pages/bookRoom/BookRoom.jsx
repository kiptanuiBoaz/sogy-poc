import React from "react";
import "./bookRoom.css"

export const BookRoom = () => {
    return(
        <>
        
            <form className="room-form">
                <label>Name</label>
                <input type="text"/>

                <label>Phone</label>
                <input type="number"/>

                <label>Email</label>
                <input type="email"/>
                
                <label>Date Check In</label>
                <input type="date"/>

                <label>Date Check Out</label>
                <input type="date"/>

                <label>Adults</label>
                <input type="email"/>

                <label>Children</label>
                <input type="email"/>

                <label  class="switch">
                    <span>Will you be bringing pets</span>
                    <input  type="checkbox" />
                    <span class="slider round"></span>
                </label>
            
                
            </form>
        </>
    )
}
