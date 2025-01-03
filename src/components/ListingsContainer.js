import React, {useState} from "react";
import ListingCard from "./ListingCard";
import CreateListingForm from "./CreateListingForm";

function ListingsContainer({onDeleteListing, searchResults, handleAddListing }) {
  const [sortBy, setSortBy] = useState('')

  const sortedListings = searchResults.sort((listingA, listingB) => {
    if (sortBy === "id") {
      return listingA.id - listingB.id
    }
    else {
      return listingA.location.localeCompare()
    }
  })

  function handleDefaultSort() {
    setSortBy('id')
  }

  function handleLocationSort() {
    setSortBy('location')
  }

  return (
    <main>
      <CreateListingForm onAddListing={handleAddListing} />
      <button onClick={handleDefaultSort}>Sort By Default</button>
      <button onClick={handleLocationSort}>Sort By Location</button>
      <ul className="cards">{sortedListings.map((listing) => (
        <ListingCard listing={listing} key={listing.id} image={listing.image} onDeleteListing={onDeleteListing} />))}
      </ul>
    </main>
  );
}

export default ListingsContainer;
