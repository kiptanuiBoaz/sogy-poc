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
      <section className="footer" tooltip="This is the developer info row">
        <div>
          <p>Copyright ©{new Date().getFullYear()} || Developed by Elvis Mariga </p>
          <img src="https://pps.whatsapp.net/v/t61.24694-24/310564933_855449148976870_4419258625965570890_n.jpg?ccb=11-4&oh=01_AdRq9ULj3SNhQtIAL-D6wqSY6bOb6B75x3WqmgezAezX6A&oe=638B1D99" alt="avatar" />
          <a rel="noreferrer" target={"_blank"} href="mailto:elvmariga@gmail.com
"> <MdEmail/> &nbsp; elvmariga@gmail.com
</a>
          <a rel="noreferrer" target={"_blank"} href="tel:+254 719 311036"> <FaPhoneAlt/> &nbsp; +254 719 311036</a>
        </div>
        
        <div className="icons">
          <a rel="noreferrer" target={"_blank"} href="https://web.facebook.com"><BsFacebook/></a> 
          <a rel="noreferrer" target={"_blank"} href="https://twitter.com/ElvisMariga1"><ImTwitter/></a>
          <a rel="noreferrer" target={"_blank"} href="https://github.com/elvmariga"><BsGithub/></a>
          <a rel="noreferrer" target={"_blank"} href="https://www.linkedin.com"><ImLinkedin/></a>
        </div>
       
      </section>
    )
};
  