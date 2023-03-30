import React from "react";

function Search({plants, setDisplayPlants}) {

  const handleChange = (e) => {
    let searchedPlants = plants.filter((plant)=>{return(plant.name.includes(e.target.value))})
    console.log(searchedPlants)
    
    setDisplayPlants(searchedPlants)
  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
}

export default Search;
