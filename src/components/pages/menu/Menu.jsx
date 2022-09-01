import React , {useState} from "react";
import MenuButtons from "./MenuButtons";
import DynamicPage from "./DynamicPage";
import mains from "../../assets/mains";
import drinks from "../../assets/drinks";
import desserts from "../../assets/desserts";
import "./menu.css"
import MenuTexts from "./MenuTexts";


export const Menu = () => {
  // state to manage the type of food  currently active
  const [foodCategory, setFoodCategory] = useState(1);

  const titleArr = ["DESSERTS", "MAINS", "DRINKS"];

  const setCategory = (index) =>{
    setFoodCategory(index);
   
  }

  return(
    <div className="menu" >
    
      <MenuTexts/>

      <div className="buttonsContainer"  >
        
        {titleArr.map(
          (title,index)=>{
            return(

              <MenuButtons 
                title= {title} 
                setClick={setCategory} 
                index = {index}
                foodCategory= {foodCategory}
                
              />
            )
          }
        )}
          
      </div>

      <div className="menuContent">
        {/* conditionally rendering the active subcategory */}
        { foodCategory === 1 && <DynamicPage array = {mains} /> }

        { foodCategory === 2 && <DynamicPage array = {drinks} />}

        { foodCategory === 0 && <DynamicPage array ={desserts}/>}
        
      </div>
      
    </div>
  )
};
  