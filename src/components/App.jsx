import React , { useState, useEffect } from "react";
import Welcome from "./pages/welcome/Welcome";
import Footer from "./pages/footer/Footer";
import Rooms from "./pages/rooms/Rooms";
import Reserve from "./pages/reserve/Reserve";
import Photos from "./pages/photosPage/Photos";
import Events from "./pages/events/events";
import Menu from "./pages/menu/Menu";
import ContactUs from "./pages/contactUs/ContactUs";
import NavBar from "./pages/navbar/NavBar";
import Homepage from "./pages/homepage/Homepage";
// import "./loader.css"

const App = () =>{

  return (
    
      <div className="main-content">
        
        <NavBar/>
        <Homepage/>
        <Rooms />
        <Photos />
        <Menu />
        <Events />
        <Welcome/>
        <Reserve />
        <ContactUs />
        <Footer />  
        
      </div>
     
  );
}

export default App;
