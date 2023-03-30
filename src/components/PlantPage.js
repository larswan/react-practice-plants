import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plants, setPlants] = useState([])

  const request = async()=>{
    let req = await fetch(`http://localhost:6001/plants`)
    let res = await req.json()
    console.log(res)
  }

  useEffect(()=>{
    request()

  },[])

  return (
    <main>
      <NewPlantForm />
      <Search />
      <PlantList />
    </main>
  );
}

export default PlantPage;
