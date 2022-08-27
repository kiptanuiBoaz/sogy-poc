import React , {useState} from "react";
import MenuButtons from "./MenuButtons";
import DynamicPage from "./DynamicPage";
import mains from "./mains";
import drinks from "./drinks";
import desserts from "./desserts";
import "./menu.css"
import MenuTexts from "./MenuTexts";


const Menu = () => {
  // state to manage the type of food  currently active
  const [foodCategory, setFoodCategory] = useState(1);

  const titleArr = ["DESSERTS", "MAINS", "DRINKS"];

  return(
    <div className="menu" >
    got 
      <MenuTexts/>

      <div className="buttonsContainer"  >
        
        {titleArr.map(
          (title,index)=>{
            return(
              <MenuButtons 
                title= {title} 
                onClick={()=>setFoodCategory(index)} 
                style={{color: foodCategory===index && "red"}}
              />
            )
           
          }
        )}
          
      </div>

      <div className="menuContent">
        {/* conditionally rendering the active subcategory */}
        {
          foodCategory === 1 && <DynamicPage 
            array = {mains}
          />
        }

        {

         foodCategory === 2 && <DynamicPage 
            array ={drinks}
         />
        }

        {

          foodCategory === 0 && <DynamicPage 
            array ={desserts}
          />
        }
        
      </div>
      
    </div>
  )
};
  
export default Menu;