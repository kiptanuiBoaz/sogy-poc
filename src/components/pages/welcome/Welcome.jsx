import React from "react";
import Roll from 'react-reveal/Roll';
import Slide from 'react-reveal/Slide';
import WelcomeButtons from "./welcomeButtons";
import { Zoom } from "react-reveal";
import "./welcome.css"


export const Welcome = () => {
  return (
    <section id="welcome" name="aboutUs"  className="welcome">

      <div>
        <h1>Welcome!</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula semper nunc ut consectetur. Ut ullamcorper leo sit amet tellus pharetra cursus. In diam erat, hendrerit a malesuada suscipit, posuere sit amet leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. </p>
        
        <Slide duration={1500} right>
          <img className="mainPic" src={"https://preview.colorlib.com/theme/sogo/images/img_1.jpg"}   alt={"a bed and bed lamp"}></img>
        </Slide>
        
        <Roll duration={1500} left>
          <img className={"overlay-pic"} src ={"https://preview.colorlib.com/theme/sogo/images/xfood-1.jpg.pagespeed.ic.C-YkWFvGrQ.webp"} alt=" a lady eating" ></img>
        </Roll>

        <Zoom>
          <WelcomeButtons/>
        </Zoom>
          
      </div>
    </section>
  )
};
  