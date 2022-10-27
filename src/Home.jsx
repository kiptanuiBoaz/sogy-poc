import React from "react";
import {Homepage, Welcome, Rooms, Photos, Menu, Events, Reserve, ContactUs } from "./components/pages";

export const Home = () => {
  return (
    <div className="main-content">
    
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
