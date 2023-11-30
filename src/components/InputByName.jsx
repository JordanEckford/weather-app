import { useState } from "react";

function InputByName({ setSearchLat, setSearchLong }) {
 const [userInput, setUserInput] = useState("");

 function handleSubmit(submitEvent) {
  submitEvent.preventDefault();
  setUserInput(userInput);
 const appID = import.meta.env.VITE_WEATHER_KEY;
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
    required
    id="client-input-city"
    type="text"
    placeholder="City Name"
    value={userInput}
    onChange={(event) => {
     const value = event.target.value;
     setUserInput(value);
    }}
   />
   <button className="submit">+</button>
  </form>
 );
}

export default InputByName;
