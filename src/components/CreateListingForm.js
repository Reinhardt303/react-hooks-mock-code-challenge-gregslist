import React, {useState} from 'react'

function CreateListingForm({onAddListing}) {
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')
    const [location, setLocation] = useState('')

function handleSubmit(event) {
    event.preventDefault()
    const formData = {description, image, location};
    fetch ("http://localhost:6001/listings", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(formData),
    })
    .then(res => res.json())
    .then(newListing => {
        onAddListing(newListing)
    })
}

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="location">location:</label>
      <input type="text" id="location" value={location} onChange={event => setLocation(event.target.value)} />  
      <label htmlFor="image">image:</label>
      <input type="text" id="image" value={image} onChange={event => setImage(event.target.value)} />  
      <label htmlFor="Description">Description:</label>
      <input type="text" id="description" value={description} onChange={event => setDescription(event.target.value)} /> 
      <button type="submit">AddListing</button> 
    </form>
  )
}

export default CreateListingForm
