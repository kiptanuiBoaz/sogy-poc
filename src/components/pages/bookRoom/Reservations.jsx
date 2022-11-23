import React, { useState } from "react";
import "./reservation-styles/reservation.css";
import { Input } from "./Input";
import axios from "axios";
import { Link } from "react-scroll";
import { useNavigate } from "react-router";
// import {NavBar} from "../navbar/NavBar"
// import {Footer} from "../footer/Footer"

export const Reservations = () => {
  const [guestDetails, setGuestDeatils] = useState();
  const [loading, setLoading] = useState();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setGuestDeatils({
      ...guestDetails,

      // Trimming any whitespace
      [e.target.name]: e.target.value.trim(),
    });
  };

  const formSubmit = (e) => {
    // prevent the refreshing of the page as native button behavior
    e.preventDefault();
    postUserData();
  };

  const postUserData = async () => {
    setLoading(true);
    console.log(loading);

    try {
      // performed asychronously
      const res = await axios({
        method: "POST",
        url: "http://localhost:8080/customers",
        data: guestDetails,
      });
      // after data has been fetche from api response
      setLoading(false);
      console.log(res.data);
    } catch (error) {
      // handles returnd error from api incase of any

      console.log(error);
    }
  };

  return (
    <section>
      <div className="top">
      <p onClick={()=> navigate(-1)} className="navig"> &laquo; Go back </p>
        
        <Link to={"/"} spy={true} className="brand" smooth={true} offset={0}>
          Sogy
        </Link>
        

       
        

      </div>

      <div className="reservations">
        <h1>
          <span className="dash">-</span>Reservations
          <span className="dash">-</span>
        </h1>
        <p>Please fill the form below to make a reservation</p>
        <form className="room-form">
          {/* Form for reservation */}
          {/* each input in an external reusable component sets the returend entred  value into respective field */}
          <div>
            <div className="name-div">
              <Input
                onChange={handleChange}
                name="First Name"
                className="name-input"
                type="text"
              />
            </div>
            <div className="name-div">
              <Input
                onChange={handleChange}
                name="Last Name"
                className="name-input"
                type="text"
              />
            </div>
          </div>

          <div>
            <Input
              onChange={handleChange}
              name="Phone"
              className="phone-input"
              type="tel"
            />
          </div>
          <div>
            <Input
              onChange={handleChange}
              name="Email"
              className="email-input"
              type="email"
            />
          </div>
          <div>
            <Input
              onChange={handleChange}
              name=" Check In"
              className="date-input"
              type="date"
            />
          </div>
          <div>
            <Input
              onChange={handleChange}
              name="Check Out"
              className="date-input"
              type="date"
            />
          </div>
          <div>
            <Input
              onChange={handleChange}
              name="Adults"
              className="people-input"
              type="number"
            />
          </div>
          <div>
            <Input
              onChange={handleChange}
              name="Children"
              className="people-input"
              type="number"
            />
          </div>
          <div>
            <div className="switch">
              <Input
                onChange={handleChange}
                type="checkbox"
                name="Will you be bringing pets?"
              />
            </div>
          </div>

          <button onClick={formSubmit}>Reserve now</button>
        </form>

        {/* <Footer/> */}
      </div>
    </section>
  );
};
