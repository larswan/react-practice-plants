import React from "react";
import PlantCard from "./PlantCard";

function PlantList({displayPlants, setDisplayPlants}) {
  return (
    
    <ul className="cards">
      {
        displayPlants.map((plant)=>{
          return(
            <PlantCard plant={plant} />
          )
        })
      }
    </ul>
  );
}

export default PlantList;