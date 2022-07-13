import React , {useState} from "react";
import MenuButtons from "./MenuButtons";
import DynamicPage from "./DynamicPage";
import mains from "./mains";
import drinks from "./drinks";
import desserts from "./desserts";


function Menu() {
  // state to manage the type of food  currently active
  const [foodCategory, setFoodCategory] = useState("MAINS");
  const buttonsArr = ["MAINS","DESSERTS","DRINKS"];
  const[clicked, setClicked]= useState(false);
    
  function clickedSpan() {
    setClicked(current => !current);
  }

  // setting the current state of active subcategory to the one currntly active
  function handleClicked(title){
 
    setFoodCategory(title);
    
  }

  return (
    <div className="menu" >
    
      <div className="menuTexts">
        <h1>Our Resturant Menu</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio ullam accusamus amet distinctio ratione ab voluptatum porro? Ut, dolores et officia distinctio suscipit omnis non, iusto rem natus autem cum!</p>
      </div>

      <div className="buttonsContainer"  >
        {buttonsArr.map( (buttonsArr)=>{
    
          return(
            <MenuButtons
              title= {buttonsArr}
              // pass the function so as to grab the active food subcategory
              btnClick ={handleClicked}
              spanClicked = {clickedSpan}
              style={{
                color: clicked ? 'red' : '',
              }}
              
            />
          )

        })}
      </div>

      <div className="menuContent">
        {/* conditionally rendering the active subcategory */}
        {
          foodCategory === "MAINS" && <DynamicPage 
            array = {mains}
          />
        }

        {

         foodCategory ==="DRINKS" && <DynamicPage 
            array ={drinks}
         />
        }

        {

          foodCategory ==="DESSERTS" && <DynamicPage 
            array ={desserts}
          />
        }
        
      </div>
      
    </div>
  )
};
  
export default Menu;