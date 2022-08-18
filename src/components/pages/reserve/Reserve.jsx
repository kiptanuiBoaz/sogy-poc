
import React from "react";
import Additionals from "./Additionals";
import RButton from "./RButton";
import Recommendation from "./Recommendation";
import "reserve.css"


function Rooms() {
    return (
      <section className="reserve">
       <Recommendation/>
       <Additionals/>
        <RButton/>
      </section>
    )
};
  
export default Rooms;