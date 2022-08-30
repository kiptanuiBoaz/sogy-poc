import React from "react";



function  MenuButtons(props){   
    
    const index = props.index;
    const setClick = props.setClick;
    const title = props.title;
    const foodCategory = props.foodCategory;

    return(
        <div>
            <button 
                onClick ={(event)=>{  
                 setClick(index);
                 event.preventDefault();
                }}
                style={{color: foodCategory===index && "red"}}
                >
                {title}</button>
        </div>
         
    )
};

export default MenuButtons;