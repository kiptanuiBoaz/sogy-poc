
import React from "react";
import Additionals from "./Additionals";
import RButton from "./RButton";
import Recommendation from "./Recommendation";
import "./reserve-styles/reserve.css"


export const Reserve = () => {
  return (
    <section className="reserve">
      <Recommendation/>
      <Additionals/>
      <RButton/>
    </section>
  )
};
  