import { useState } from "react";
import React from "react";

function PlantCard({plant}) {

  const [inStock, setInStock] =useState(true)

  const handleStock = () => {
    setInStock(!inStock)
  }

  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {inStock ? (
        <button onClick={() => { handleStock() }} className="primary">In Stock</button>
      ) : (
          <button onClick={()=>{handleStock()}} >Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
