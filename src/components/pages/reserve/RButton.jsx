import React from "react";
import ReserveButton from "../homepage/ReserveButton";
import Jump from 'react-reveal/Jump';

function RButton(){
    return(
        <Jump delay= {1500} count={20}>
            {<ReserveButton text={"Reserve "} />}
        </Jump>
    )
}

export default RButton;