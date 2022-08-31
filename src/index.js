import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App.jsx";
import { BrowserRouter as Router} from "react-router-dom";

//this is the entry point of the application
ReactDOM.render(
    <Router>
        <App/>
    </Router>

,document.getElementById("root"));



