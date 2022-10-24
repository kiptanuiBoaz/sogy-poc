import React from "react";



function  MenuButtons({index, setClick,title, foodCategory}){   


    return(
        <div key={index}>
            <button 
                    onClick ={(event)=>{  
                    setClick(index);
                    event.preventDefault();
                    }}
                    style={{color: foodCategory===index && "#fd8421"}}
                    className="menu-buttons"
                >
                    {`-${title}-`}
                </button>
        </div>
         
    )
};

export default MenuButtons;