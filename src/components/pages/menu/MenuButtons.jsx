import React from "react";



function  MenuButtons(props){
    
    
    return(
        <div>
            <button   onClick ={(event)=>{  
                props.btnClick(props.title);
                event.preventDefault();}}
            >
            {/* bugggy...doesn't work yet */}
               <span onClick= {props.spanClicked} >{props.title}</span> 
            </button>
        </div>
       
    )
};

export default MenuButtons;