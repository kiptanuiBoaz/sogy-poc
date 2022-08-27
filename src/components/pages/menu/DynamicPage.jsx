import React from "react";


const DynamicPage = (props) =>{
    // tapping into passed array from parent element
    const data = props.array;

    return(
        /* replicating a div for each item on the menu */
        data.map((data)=>{
            /* destructuring the data array */
            const {price: mainPrice, mainDish: dishName, description: foodDescription} = data;
        
        // eslint-disable-next-line
        /* rendering the contents of the object containing menu items */
            return(
                <div>
            
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