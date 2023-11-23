import { useState } from "react";

function InputByName({ setSearchLat, setSearchLong }) {
 const [userInput, setUserInput] = useState("");

 function handleSubmit(submitEvent) {
  submitEvent.preventDefault();
  setUserInput(userInput);
  const appID = "796a348dc20c3239ab56d7cabc4a83bd";
  const url = `https://api.openweathermap.org/geo/1.0/direct?q=${userInput}&appid=${appID}`;

  fetch(url).then((response) => {
   return response.json().then((data) => {
    setSearchLat(data[0].lat);
    setSearchLong(data[0].lon);
    setUserInput("");
   });
  });
 }

 return (
  <form className="search-form" onSubmit={handleSubmit}>
   <label htmlFor="client-input-city"></label>
   <input
    id="client-input-city"
    type="text"
    placeholder="City Name"
    value={userInput}
    onChange={(event) => {
     const value = event.target.value;
     setUserInput(value);
    }}
   />
   <button className="submit">Search</button>
  </form>
 );
}

export default InputByName;
