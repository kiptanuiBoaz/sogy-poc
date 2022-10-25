import React from "react";
import ReserveButton from "../homepage/ReserveButton";
import Jump from 'react-reveal/Jump';

function RButton(){
    return(
        <div className="r-button">
            <Jump delay= {1500} count={20}>
                {<ReserveButton text={"Reserve Now! "} />}
            </Jump>
        </div>
    )
}

export default RButton;