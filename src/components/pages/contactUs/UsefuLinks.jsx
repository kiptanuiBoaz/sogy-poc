import React from "react";
import Link from "./Link";
import links from "./links";
import SignUpForm from "./SignUpForm"
import Fade from 'react-reveal/Fade';

function UsefuLinks(){


    return(
        <>

            <div  className= "usefuLinks">
                {links.map((oneLink)=>{
                    return(
                        <div>
                        
                            <Link
                                text ={oneLink.text }
                                href={oneLink.href}
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