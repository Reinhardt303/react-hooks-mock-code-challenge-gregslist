import React, {useEffect, useState}  from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([])
  const [search, setSearch] = useState("")


  useEffect(() => {
    fetch(' http://localhost:6001/listings')
    .then((res) => res.json())
    .then((listings) => setListings(listings))
  },[] )

  function handleDeleteListing(deletedListing) {
    const updatedListings = listings.filter((listing) => listing.id !== deletedListing.id)
    setListings(updatedListings)
  }

  const searchResults = listings.filter( listing => {
    return listing.description.toLowerCase().includes(search.toLowerCase())
  })

  function handleSearch(searchTerm) {
    setSearch(searchTerm)
  }

  function handleAddListing(newListing) {
    const updatedListingArray = [newListing, ...listings]
    setListings(updatedListingArray)
}
  
  return (
    <div className="app">
      <Header onSearch={handleSearch} />
      <ListingsContainer onDeleteListing={handleDeleteListing} searchResults={searchResults} handleAddListing={handleAddListing} />
    </div>
  );
}

export default App;
