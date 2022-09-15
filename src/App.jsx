import React  from "react";
import {Home} from "./Home";
import {Route, Routes} from "react-router-dom";
import { Reservations } from "./components/pages";
// import "./loader.css"

export const App = () => {

  return (
    <>
      <Routes>
        <Route exact path = "/" element={<Home/>} />
        <Route exact path="/reservations" element={<Reservations/>} />
      </Routes>
    </>
     
  );
}

