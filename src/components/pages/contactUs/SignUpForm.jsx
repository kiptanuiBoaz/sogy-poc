import React, { useState } from "react";
// import ReserveButton from "../homepage/ReserveButton";

function SignUpForm (){
    const [contact,setContact] = useState({
      title:"",
      email:""
    });
    const [subscribers, setSubscribers] = useState([]);
    

    function handleChange(event){
    
      const {value, name} = event.target
      
      setContact ( (prevCont)=>{
        
        return{
          ...prevCont,
          [name]:value
        }
  
    })};

    function handleClick(newSubscriber){
      setSubscribers( (prevCont) => {
        return [...prevCont, newSubscriber]
      })
      return subscribers;
    };

    return (
        <form>
          <div className="newsLetter">
            <h1>Hello {contact.title} please sign up for our newsletter</h1>
            <input  onChange ={handleChange} value ={contact.title} name="title" type="text" placeholder="Input your first Name..." />
            <input onChange ={handleChange} value ={contact.email} name="email" type="email" placeholder="Input your Email..." />

            <div className="subscribe-btn">
              <button onClick= {handleClick} > Subscribe </button>
            </div>
           
          </div>
        </form>
        
          
      );
};

export default SignUpForm;