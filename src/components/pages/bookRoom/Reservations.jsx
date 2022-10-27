import React ,{useState} from "react";
import "./reservation-styles/reservation.css";
import { Input } from "./Input";
import axios from "axios";
// import {NavBar} from "../navbar/NavBar"
// import {Footer} from "../footer/Footer"

export const Reservations = () => {

    const [guestDetails, setGuestDeatils]= useState();
    const [loading, setLoading] = useState();
    
 
    const handleChange = (e) => {
        setGuestDeatils({
          ...guestDetails,
    
          // Trimming any whitespace
          [e.target.name]: e.target.value.trim()
        });
    };
    
     

  

    const formSubmit  = (e) => {
        // prevent the refreshing of the page as native button behavior
        e.preventDefault(); 
        postUserData();
    }

    const postUserData = async() =>{
        setLoading(true);
        console.log(loading);

        try{
            // performed asychronously
            const res = await axios({
                method: 'POST',
                url:"http://localhost:8080/customers",
                data: guestDetails,

            })
            // after data has been fetche from api response
            setLoading(false);
            console.log(res.data)
        }

        catch (error) {
            // handles returnd error from api incase of any
           
            console.log(error)
        }
    }
    

  
    return(
        <section className="reservations">

            {/* <NavBar/> */}

            <h1><span className="dash">-</span>Reservations<span  className="dash">-</span></h1>
        
            <form className="room-form">
            {/* Form for reservation */}
            {/* each input in an external reusable component sets the returend entred  value into respective field */}
                <Input onChange = { handleChange} name= "Name" className= "name-input" type= "text"/>
                <Input onChange = { handleChange}  name= "Phone" className= "phone-input" type= "tel"/>
                <Input onChange = { handleChange}  name= "Email" className= "email-input" type= "email"/>
                <Input onChange = { handleChange}  name= " Check In" className= "date-input" type= "date"/>
                <Input onChange = { handleChange}  name= "Check Out" className= "date-input" type= "date"/>
                <Input onChange = {handleChange}  name= "Adults" className= "people-input" type= "number"/>
                <Input onChange = { handleChange}  name= "Children" className= "people-input" type= "number"/>
                <Input onChange = { handleChange} type="checkbox"  name="pets" className="switch"/>
                
                <button onClick = {formSubmit} >Reserve now</button>
            
            </form>

            {/* <Footer/> */}

        </section>
    )
}
