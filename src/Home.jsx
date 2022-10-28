import React from "react";
import {Homepage,NavBar, Welcome, Rooms, Photos, Menu, Events, Reserve, ContactUs } from "./components/pages";

export const Home = () => {
  return (
    <div className="main-content">
      <NavBar/>
      <Homepage/>
      <Welcome/>
      <Rooms />
      <Photos />
      <Menu /> 
      <Events />
      <Reserve />
      <ContactUs />
    
    </div>
  )
}
