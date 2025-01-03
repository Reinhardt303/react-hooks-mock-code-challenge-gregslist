import React, {useState} from "react";

function ListingCard({listing, onDeleteListing}) {
  const [buttonStar, setButtonStar] = useState(false)


  function handleClick() {
    let newbuttonStar = !buttonStar
    setButtonStar(newbuttonStar)
  }

  function handleDeleteClick() {
    //console.log("Deleted button key:", listing.id)
    fetch(`http://localhost:6001/listings/${listing.id}`,{
    method: "DELETE",
    })
    .then((res) => res.json())
    .then(() => onDeleteListing(listing))
  }



  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={listing.description} />
      </div>
      <div className="details">
        {buttonStar ? (
          <button onClick={handleClick} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleClick} className="emoji-button favorite">☆</button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button className="emoji-button delete" onClick={handleDeleteClick} >🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
