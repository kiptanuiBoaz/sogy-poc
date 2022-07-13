import React from "react";

function ReserveButton(props) {
    return <a onClick={props.btnClicked} class="bn31" href="/"><span class="bn31span">{props.text}</span></a>;
}

export default ReserveButton;