import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plants, setPlants] = useState([])
  const [displayPlants, setDisplayPlants] = useState([])

  const request = async()=>{
    let req = await fetch(`http://localhost:6001/plants`)
    let res = await req.json()
    setPlants(res)
    setDisplayPlants(res)
    console.log( res)
  }

  useEffect(()=>{
    request()
  },[])

  return (
    <main>
      <NewPlantForm setDisplayPlants={setDisplayPlants} />
      <Search plants={plants} setDisplayPlants={setDisplayPlants} />
      <PlantList displayPlants={displayPlants} setDisplayPlants={setDisplayPlants}/>
    </main>
  );
}

export default PlantPage;
