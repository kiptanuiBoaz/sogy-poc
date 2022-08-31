import React from "react";
import ReserveButton from "./ReserveButton";
import Text from "./Text";
import Typed from "react-typed";
import Jump from 'react-reveal/Jump';
import "./homepage.css"


export const  Homepage = ()=> {
  return (
    <div  className= "homepage" name="/">
    
      <h2 className="welcomeText" style={{paddingTop:"130px"}}>WELCOME TO  5 <span style={{color:"#ffba5a"}}>&#9733;</span> &nbsp; HOTEL</h2>
      <Text text="We make the most memorabe stay here"/>
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
      
      <Text text = "Eat well rest, well with us!"/>

      <Jump delay= {1500} count={20}>
        {<ReserveButton text= {"Reserve Now"} />}
      </Jump>
      
    </div>
  )
};
  


