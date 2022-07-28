import React , { useState, useEffect,Fragment } from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
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
    <Fragment>
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
        <Router>
          <Fragment>
           <NavBar/>
            <Routes>
              <Route exact path ="/" component = {<Homepage/>}></Route>
              <Route  path= "/welcome" component={Welcome}></Route>
              <Route></Route>
              <Route></Route>
            </Routes>
            
             
              
              {/* <Rooms />
              <Photos />
              <Menu />
              <Events />
              <Reserve />
              <ContactUs />
              <Footer />  */}

          </Fragment>
          
        </Router>
        </div>
      
      </div>
     
    </Fragment>
  );
}

export default Home;