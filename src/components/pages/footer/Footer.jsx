import React from "react";
import {MdEmail} from "react-icons/md";
import {ImTwitter} from "react-icons/im";
import {BsGithub} from "react-icons/bs";
import{ ImLinkedin} from "react-icons/im";
import {BsFacebook} from "react-icons/bs";
import {FaPhoneAlt} from "react-icons/fa";
import "./footer.css"


export const  Footer = () => {
    return (
      <section className="footer" tooltip="This is the developer info ">
        <div>
          <p>Copyright ©{new Date().getFullYear()} || Developed by Kiptanui Boaz </p>
          <img src="https://avatars.githubusercontent.com/u/84452739?v=4" alt="avatar" />
          <a rel="noreferrer"   target={"_blank"} href=" boaserem022@gmail.com"> <MdEmail/> &nbsp; boaserem022@gmail.com
</a>
          <a rel="noreferrer"   target={"_blank"} href="tel:+254705935133"> <FaPhoneAlt/> &nbsp; +254705935133</a>
        </div>
        
        <div className="icons">
          <a rel="noreferrer" target={"_blank"} href="https://web.facebook.com"><BsFacebook/></a> 
          <a rel="noreferrer" target={"_blank"} href="https://twitter.com/k_boazo"><ImTwitter/></a>
          <a rel="noreferrer" target={"_blank"} href="https://github.com/kiptanuiBoaz"><BsGithub/></a>
          <a rel="noreferrer" target={"_blank"} href="https://www.linkedin.com/in/kiptanui-boaz-466154217/"><ImLinkedin/></a>
        </div>
       
      </section>
    )
};
  