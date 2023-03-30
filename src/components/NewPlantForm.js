import React from "react";

function NewPlantForm({setDisplayPlants}) {

  

  const submitPlant = async(e) => {
    e.preventDefault()

    let newPlant = {
      name: e.target.name.value,
      image: e.target.image.value,
      price: e.target.price.value
    }
    setDisplayPlants(prev =>{return ([...prev, newPlant])})

    const postPlant = () => {
      let req = fetch(
        `http://localhost:6001/plants`, {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: e.target.name.value,
          image: e.target.image.value,
          price: e.target.price.value
        })
      }
      )
        .then(res => res.json())
        .then(data => console.log(data))
    }
    postPlant()
  }



  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={submitPlant}>
        <input type="text" name="name" placeholder="Plant name" />
        <input type="text" name="image" placeholder="Image URL" />
        <input type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
