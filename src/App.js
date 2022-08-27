import React  from "react";
import Welcome from "./components/pages/welcome/Welcome";
import Footer from "./components/pages/footer/Footer";
import Rooms from "./components/pages/rooms/Rooms";
import Reserve from "./components/pages/reserve/Reserve";
import Photos from "./components/pages/photosPage/Photos";
import Events from "./components/pages/events/EventContainer";
import Menu from "./components/pages/menu/Menu";
import ContactUs from "./components/pages/contactUs/ContactUs";
import NavBar from "./components/pages/navbar/NavBar";
import Homepage from "./components/pages/homepage/Homepage";
// import "./loader.css"

const App = () =>{

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
     
  );
}

export  default App;
