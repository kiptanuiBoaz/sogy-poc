import React from "react";
import Zoom from "react-reveal/Zoom";


function RoomCard(props){
    

    return(
        
        <Zoom side={true} duration={1500} >
            <div className="roomCard" >
                <img src={props.imageSource} alt={props.alt}/>
                <header>{props.name}</header>
                <footer>{props.price}</footer>
            </div>
        </Zoom>
        
        
    )
};

export default RoomCard;