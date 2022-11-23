import React from "react";
import {MdEmail} from "react-icons/md";
import {FaPhoneAlt} from "react-icons/fa";
import {ImLocation2} from "react-icons/im";
import Fade from 'react-reveal/Fade';

function ContactUs(){
    return(
        <Fade bottom >
            <div style={{textAlign:"center",marginTop:"20px"}} className="contactInfo">
                <div>
                    <ImLocation2 className="restIcon topIcon"/>
                    <p><span>Address:&nbsp;</span> Mombasa Road </p>
                </div>
                <div>
                    <FaPhoneAlt  className="restIcon"/>
                    <p><span>Phone:&nbsp;</span>+254 722 222 444</p>
                </div>
                <div>
                    <MdEmail  className="restIcon"/> 
                    <p><span>Email:&nbsp;</span>sogy.mail@yahoo.com</p>
                </div>
             
            
            </div>
        </Fade>
    )
}

export default ContactUs;