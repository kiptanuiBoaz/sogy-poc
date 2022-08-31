import React from "react";
import {NavBar, Homepage, Welcome, Rooms, Photos, Menu, Events, Reserve, ContactUs, Footer} from "./components/pages";

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
      <Footer />
    </div>
  )
}
