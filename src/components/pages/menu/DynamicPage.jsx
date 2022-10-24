import React from "react";


const DynamicPage = ({array}) =>{
    // tapping into passed array from parent element
   

    return(
        /* replicating a div for each item on the menu */
        array.map(({price: mainPrice, mainDish: dishName, description: foodDescription},i)=>{
            /* destructuring the data array */
            
        
           // eslint-disable-next-line
           /* rendering the contents of the object containing menu items */
            return(
                <div key={i} className="menu-content-dynamic">
            
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