import React , {useState} from "react";
import MenuButtons from "./MenuButtons";
import DynamicPage from "./DynamicPage";
import mains from "./mains";
import drinks from "./drinks";
import desserts from "./desserts";
import "./menu.css"


const Menu = () => {
  // state to manage the type of food  currently active
  const [foodCategory, setFoodCategory] = useState("mains");

  const setDrinksCategory = () =>{
    setFoodCategory("drinks");

  }

  function setMainsCategory (){
    setFoodCategory("mains");

    
  }

  const setDessertsCategory = () =>{
    setFoodCategory("desserts");

  }

  
  return(
    <div className="menu" >
    
      <div className="menuTexts">
        <h1>Our Resturant Menu</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio ullam accusamus amet distinctio ratione ab voluptatum porro? Ut, dolores et officia distinctio suscipit omnis non, iusto rem natus autem cum!</p>
      </div>

      <div className="buttonsContainer"  >
        
        <MenuButtons 
          title="MAINS" 
          onClick={setMainsCategory} 
          style={{color: foodCategory===mains && "red"}}

        />

        <MenuButtons 
          title="DESSERTS"  
          onClick={setDessertsCategory} 
          style={{color: foodCategory===desserts && "red"}}
        />

        <MenuButtons 
          title= "DRINKS"  
          onClick={setDrinksCategory } 
          style={{color: foodCategory===drinks && "red"}}

        />
          
      </div>

      <div className="menuContent">
        {/* conditionally rendering the active subcategory */}
        {
          foodCategory === "mains" && <DynamicPage 
            array = {mains}
          />
        }

        {

         foodCategory ==="drinks" && <DynamicPage 
            array ={drinks}
         />
        }

        {

          foodCategory ==="desserts" && <DynamicPage 
            array ={desserts}
          />
        }
        
      </div>
      
    </div>
  )
};
  
export default Menu;