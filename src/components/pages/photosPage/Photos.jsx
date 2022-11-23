import React from "react";
import Zoom from 'react-reveal/Zoom';
import PhotosCard from "./PhotosCard";
import "./photos.css";
import "../welcome/welcome.css"

export const  Photos = () => {
  return (
    <section className="photos">
      <div className="photosContent">
   
        <Zoom left>
          <h1>Photos</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio ullam accusamus amet distinctio ratione ab voluptatum porro? Ut, dolores et officia distinctio suscipit omnis non, iusto rem natus autem cum!</p>
        </Zoom >
      </div>
      <div className="photosCorousel">
        <PhotosCard/>
      
      </div>
      
    </section>
  )
      
};
  