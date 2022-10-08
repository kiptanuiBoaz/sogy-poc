import React ,{useState} from "react";
import "./reservation-styles/reservation.css";
import { Input } from "./Input";
import axios from "axios";
// import {NavBar} from "../navbar/NavBar"
// import {Footer} from "../footer/Footer"

export const Reservations = () => {

    const [name, setName]= useState();
    const [phoneNo, setPhoneNo]= useState();
    const [email, setEmail]= useState();
    const [checkOut, setCheckOut]= useState();
    const [checkIn, setCheckIn]= useState();
    const [noOfAdults, setNoAdults]= useState();
    const [noChildren, setNoChildren]= useState();
    const [ pets, setPet ] = useState(false);
    const [loading, setLoading ] = useState (false);
    const [userError, setUserError] = useState ();


    const user = {name,phoneNo,email,checkIn,checkOut,noChildren,noOfAdults,pets}

    const formSubmit  = (e) => {
        // prevent the refreshing of the page as native button behavior
        // e.preventDefault(); 
        postUserData();
    }

    const postUserData = async() =>{
        setLoading(true);

        try{
            // performed asychronously
            const res = await axios({
                method: 'POST',
                url:"http://localhost:8080/customers",
                data: user,

            })
            // after data has been fetche from api response
            setLoading(false);
            console.log(res.data)
        }

        catch (error) {
            // handles returnd error from api incase of any
            setUserError(error)
            console.log(userError)
        }
    }
    

  
    return(
        <section className="reservations">

            {/* <NavBar/> */}

            <h1><span className="dash">-</span>Reservations<span  className="dash">-</span></h1>
        
            <form className="room-form">
            {/* Form for reservation */}
            {/* each input in an external reusable component sets the returend entred  value into respective field */}
                <Input onChange = { e => setName (e.target.value)} name= "Name" className= "name-input" type= "text"/>
                <Input onChange = { e => setPhoneNo(e.target.value)}  name= "Phone" className= "phone-input" type= "tel"/>
                <Input onChange = { e => setEmail(e.target.value)}  name= "Email" className= "email-input" type= "email"/>
                <Input onChange = { e => setCheckIn(e.target.value)}  name= " Check In" className= "date-input" type= "date"/>
                <Input onChange = { e => setCheckOut(e.target.value)}  name= "Check Out" className= "date-input" type= "date"/>
                <Input onChange = { e => setNoAdults(e.target.value)}  name= "Adults" className= "people-input" type= "number"/>
                <Input onChange = { e => setNoChildren(e.target.value)}  name= "Children" className= "people-input" type= "number"/>
                <Input onChange = { e => { e.target.value === "on" && setPet(true)}} type="checkbox"  name="Will you be bringing pets?" className="switch"/>
                
                <button onClick={(e) =>{formSubmit(); e.preventDefault(); }}>Reserve now</button>
            
            </form>

            {/* <Footer/> */}

        </section>
    )
}
