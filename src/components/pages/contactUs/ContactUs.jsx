import React from "react";
import UsefuLinks from "./UsefuLinks";
import ContactInfo from "./ContactInfo";
import "./contactUs.css"

function ContactUs() {
    return (
      <section name="contactUs" className="contactUs">
        <UsefuLinks/>
        <ContactInfo/>
      </section>
    )
};
  
export default ContactUs;