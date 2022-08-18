import React from "react";
import {MdEmail} from "react-icons/md";
import {ImTwitter} from "react-icons/im";
import {BsGithub} from "react-icons/bs";
import{ ImLinkedin} from "react-icons/im";
import {BsFacebook} from "react-icons/bs";
import {FaPhoneAlt} from "react-icons/fa";
import "./footer.css"


function Footer() {
    return (
      <section className="footer" tooltip="This is the developer info row">
        <div>
          <p>Copyright ©{new Date().getFullYear()} || Developed by Kiptanui Boaz </p>
          <img src="https://avatars.githubusercontent.com/u/84452739?v=4" alt="avatar" />
          <a target={"_blank"} href="mailto:boaserem22@gmail.com"> <MdEmail/> &nbsp; boaserem022@gmail.com</a>
          <a target={"_blank"} href="tel:0705935133"> <FaPhoneAlt/> &nbsp; 0705935133</a>
        </div>
        
        <div className="icons">
          <a target={"_blank"} href="https://web.facebook.com/boaz.serem.90/"><BsFacebook/></a> 
          <a target={"_blank"} href="https://twitter.com/CleverFreak254?t=SuN-RDa9t8eXnzm-a2kpUw&s=09"><ImTwitter/></a>
          <a target={"_blank"} href="https://github.com/kiptanuiBoaz"><BsGithub/></a>
          <a target={"_blank"} href="https://www.linkedin.com/in/kiptanui-boaz-466154217/"><ImLinkedin/></a>
        </div>
       
      </section>
    )
};
  
export default Footer;