import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const[plants, setPlants] = useState([])
  
  function handleLoad(){
    fetch('http://localhost:6001/plants')
    .then(res=>res.json())
    .then(data=> setPlants(data))
  }
  useEffect(handleLoad, [])

  function onAddPlant(newPlant) {
    setPlants((plants)=>[...plants, newPlant])
  }
  function handleSearch(e){
    let updatedArray = plants.filter(plant=>plant.name.includes(e.target.value))
    setPlants(updatedArray)
  }
  return (
    <main>
      <NewPlantForm onAddPlant = {onAddPlant} />
      <Search handleSearch = {handleSearch}/>
      <PlantList plants = {plants} />
    </main>
  );
}

export default PlantPage;
