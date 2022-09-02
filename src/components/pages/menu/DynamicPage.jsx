import React from "react";
import "./menu.css";


const DynamicPage = (props) =>{
    // tapping into passed array from parent element
    const data = props.array;

    return(
        /* replicating a div for each item on the menu */
        data.map((datum)=>{
            /* destructuring the data array */
            const {price: mainPrice, mainDish: dishName, description: foodDescription} = datum;
        
           // eslint-disable-next-line
           /* rendering the contents of the object containing menu items */
            return(
                <div className="menu-content-dynamic">
            
                    <h3>{mainPrice}</h3>
                    <h2>{dishName}</h2>
                    <p>{foodDescription}</p>
                </div>
            )
        })
    )
}
    
;

export default DynamicPage;