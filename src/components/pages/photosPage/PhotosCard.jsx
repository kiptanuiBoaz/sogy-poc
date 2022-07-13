import React from "react";
import photoList from "./photoList";
import { Carousel } from 'react-carousel-minimal';


function PhotosCard(props){

    const captionStyle = {
        fontSize: '2em',
        fontWeight: 'bold',
        fontFamily:" Arial, Helvetica, sans-serif"
    }

    const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
    }

    return(
        <div >
            <div style={{ textAlign: "center" }}>
                
                <div style={{padding: "0 20px"}}>

                    <Carousel
                        data={photoList}
                        time={3000}
                        width="1000px"
                        height="500px"
                        captionStyle={captionStyle}
                        radius="10px"
                        slideNumber={true}
                        slideNumberStyle={slideNumberStyle}
                        captionPosition="bottom"
                        automatic={true}
                        dots={true}
                        pauseIconColor="white"
                        pauseIconSize="40px"
                        slideImageFit="cover"
                        thumbnails={true}
                        thumbnailWidth="100px"
                        style={{
                            textAlign: "center",
                            maxWidth: "1000px",
                            maxHeight: "900px",
                            margin: "30px auto",
                        }}
                    />
                   

                </div>  
            </div>
        </div>
    )

       
};

export default PhotosCard;