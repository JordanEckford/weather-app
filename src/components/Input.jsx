import { useState } from "react";

function Input({ setSearchLat, setSearchLong }) {
 const [userInputLat, setUserInputLat] = useState("");
 const [userInputLong, setUserInputLong] = useState("");

 function handleSubmit(submitEvent) {
  submitEvent.preventDefault();
  setSearchLat(userInputLat);
  setSearchLong(userInputLong);
  setUserInputLat("");
 }

 return (
  <form className="search-form" onSubmit={handleSubmit}>
   <label htmlFor="client-input-latitude"></label>
   <input
    id="client-input-latitude"
    placeholder="Latitude"
    type="text"
    value={userInputLat}
    onChange={(event) => {
     const value = event.target.value;
     setUserInputLat(value);
    }}
   />
   <label htmlFor="client-input-longitude"></label>
   <input
    id="client-input-longitude"
    type="text"
    placeholder="Longitude"
    value={userInputLong}
    onChange={(event) => {
     const value = event.target.value;
     setUserInputLong(value);
    }}
   />
   <button className="submit" type="submit">
    Submit
   </button>
  </form>
 );
}

export default Input;
