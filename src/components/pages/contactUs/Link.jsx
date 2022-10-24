import React from "react";


function Link ({index,href,text}){
    
     return <a key={index} href={href}>{text}</a>

}

export default Link;