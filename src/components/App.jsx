import React from "react";
import {HashRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/homepage/Home";
import BookRoom from "./pages/bookRoom/BookRoom";
import NavBar from "./pages/navbar/NavBar";


function App() {
  return(<>

    
    <Router>
    <NavBar/>
      <Routes>
          <Route  exact path ="/"   component={Home} />
          <Route  path="/bookroom" component={BookRoom} />             
      </Routes>
    </Router>
  </>)
};

export default App;
