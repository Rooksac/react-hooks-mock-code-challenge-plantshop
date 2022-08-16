import React, {useState} from "react";

function NewPlantForm({onAddPlant}) {
  //controls forms
  const initialState = {name:'', image:'', price:''}
  const [newPlant, setNewPlant] = useState(initialState)
  
  function handleonChange(e){
    let {name, value} = e.target
    setNewPlant({...newPlant, [name]:value})
  }
  //posts new plant to the db and resets forms
  function handleSubmit(e){
    e.preventDefault();
    onAddPlant(newPlant)
    fetch('http://localhost:6001/plants', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(newPlant),
})
  .then((response) => response.json())
  .then((data) => {
    console.log('Success:', data);})
    setNewPlant(initialState)
  }
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" value={newPlant.name} onChange={handleonChange} />
        <input type="text" name="image" placeholder="Image URL" value={newPlant.image} onChange={handleonChange} />
        <input type="number" name="price" step="0.01" placeholder="Price" value={newPlant.price} onChange={handleonChange} />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
