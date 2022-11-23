import React from "react";
import { VerticleButton as ScrollUpButton } from "react-scroll-up-button"; //Add this line Here


export const ScrollUp = () => {
  return (
    <div>
      <ScrollUpButton
        style={{ backgroundColor: "#650113", border: "4px solid #650113", borderRadius: "8px", right:"1rem" }}
      />
    </div>
  );
}


