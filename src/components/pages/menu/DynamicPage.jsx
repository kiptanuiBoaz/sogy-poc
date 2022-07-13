import React from "react";


function MainsPage(props){
    // grabbing passed array from parent element
    let data = props.array;

    return(
        <div>
        {/* replicating a div for each item on the menu */}
            {data.map((data)=>{
                {/* destructuring the data array */}
                const {price: mainPrice} = data;
                const {mainDish: dishName} = data;
                const {description: foodDescription} = data;

                return(
                    <div>
                    {/* rendering the contents of the object containing menu items */}
                        <h3>{mainPrice}</h3>
                        <h2>{dishName}</h2>
                        <p>{foodDescription}</p>
                    </div>
                )
            })}
        </div>
    )
};

export default MainsPage;