import React , { useState, useEffect } from "react";
import  NavRoutes from "./pages/navbar/NavRoutes";
import Homepage from "./pages/homepage/Homepage";
import Welcome from "./pages/welcome/Welcome";
import Footer from "../components/pages/Footer";
import Rooms from "./pages/rooms/Rooms";
import Reserve from "./pages/reserve/Reserve";
import Photos from "./pages/photosPage/Photos";
import Events from "./pages/events/EventContainer";
import Menu from "./pages/menu/Menu";
import ContactUs from "./pages/contactUs/ContactUs";


function App() {
  //  monitor loading for loading animation
  const [loading, setLoading] = useState(false);

  // function to handle loader
  useEffect(() => {
    // setLoading(true);

    // check if isLoading?= true and then change the styling of body by adding cassName.
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);



  return (
    <>
      <div  >
        { loading &&
        <>
          <div className="loader-container">
              <span></span>
          </div>

          <div className="loader-spinner">
            <span>Testing</span>
          </div>
        </>
        }
        
        <div className="main-content">
          <NavRoutes/>
          <Homepage />
          <Welcome />
          <Rooms />
          <Photos />
          <Menu />
          <Events />
          <Reserve />
          <ContactUs />
          <Footer /> 
        </div>
      

      </div>
     
    </>
  );
};

export default App;
