import React from "react";

function ReserveButton(props) {
    return <a onClick={props.btnClicked} className="bn31" href="/"><span className="bn31span">{props.text}</span></a>;
}

export default ReserveButton;