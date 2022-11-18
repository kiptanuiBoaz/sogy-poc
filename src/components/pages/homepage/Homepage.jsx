import React from "react";
import ReserveButton from "./ReserveButton";
import Typed from "react-typed";
import Jump from 'react-reveal/Jump';
import "./home_page_styles/homePage.css";


export const  Homepage = ()=> {
  return (
    <div  className= "homepage" name="/">
    
      <h2 className="welcomeText" style={{paddingTop:"130px"}}>WELCOME TO  5 <span style={{color:"#ffba5a"}}>&#9733;</span> &nbsp; HOTEL</h2>

      <Typed 
        className="typing-effect"
        strings ={[
          "Make yourself comfortable. We make your comfort our priority",
          "Spend your vacation here with us, we'll make it woth your stay",
          "This is home away from home"
        ]}
        typeSpeed={60}
        backSpeed={50}
        startDelay={ 2000}
        loop 
      />
      <p>
Lorem ipsum dolor sit amet. Maecenas pharetra quam ultrices augue lacinia, eu placerat est dictum</p>

      <Jump delay= {1500} count={20}>
        {<ReserveButton text= {"Reserve Now"} />}
      </Jump>
      
    </div>
  )
};
  


