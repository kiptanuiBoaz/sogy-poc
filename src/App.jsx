import React  from "react";
import {Home} from "./Home";
import {Route, Routes} from "react-router-dom";
import { Reservations , ScrollUp, SignUp } from "./components/pages";
// import "./loader.css"
import { Footer} from "./components/pages"

export const App = () => {

  return(
    <>
      
      <ScrollUp/>
      <Routes>
      
        <Route exact path = "/" element={<Home/>} />
        <Route exact path = "/sign-up" element={<SignUp/>} />
        <Route exact path="/reservations" element={<Reservations/>} />
      </Routes>
      <Footer />
    </>
     
  );
}

