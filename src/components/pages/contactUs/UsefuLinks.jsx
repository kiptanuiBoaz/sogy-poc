import React from "react";
import Link from "./Link";
import links from "../../assets/links";
import SignUpForm from "./SignUpForm"
import Fade from 'react-reveal/Fade';

function UsefuLinks(){


    return(
        <>

            <div  className= "usefuLinks">
                {links.map(({text,href},i)=>{
                    return(
                        <div key={i}>
                        
                            <Link
                               index={i}
                                text ={text }
                                href={href}
                            />
                            
                        </div>
                    )
                })}
                <Fade left delay={1500} >
                    <SignUpForm/>
                </Fade>
            </div>
        
        </>

    )
}

export default UsefuLinks;