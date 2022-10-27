import React from "react";
import UsefuLinks from "./UsefuLinks";
import ContactInfo from "./ContactInfo";
import "./contact-us-css/contactUs.css"
import "../footer/footer.css"

export const ContactUs = () => {
  return (
    <section name="contactUs" className="contactUs">
      <UsefuLinks/>
      <ContactInfo/>
    </section>
  )
};
  