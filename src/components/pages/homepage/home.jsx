import React , { useState, useEffect } from "react";
import Homepage from "../homepage/Homepage";
import Welcome from "../welcome/Welcome";
import Footer from "../Footer";
import Rooms from "../rooms/Rooms";
import Reserve from "../reserve/Reserve";
import Photos from "../photosPage/Photos";
import Events from "../events/events";
import Menu from "../menu/Menu";
import ContactUs from "../contactUs/ContactUs";
import NavBar from "../navbar/NavBar";
function Home (){
    
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
          <NavBar/>
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
}

export default Home;