import { useState } from "react";

function InputByName({ setSearchLat, setSearchLong }) {
 const [userInput, setUserInput] = useState("");
 const [isError, setIsError] = useState(false);

 function handleSubmit(submitEvent) {
  submitEvent.preventDefault();
  setUserInput(userInput);
  const appID = import.meta.env.VITE_WEATHER_KEY;
  const url = `https://api.openweathermap.org/geo/1.0/direct?q=${userInput}&appid=${appID}`;

  fetch(url).then((response) => {
   return response
    .json()
    .then((data) => {
     setSearchLat(data[0].lat);
     setSearchLong(data[0].lon);
     setUserInput("");
     setIsError(false);
    })
    .catch(() => {
     setIsError(true);
    });
  });
 }

 return (
  <>
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
    <button className="submit">
     <img className="search-arrow" src="/search.png" />
    </button>
   </form>
   {isError ? (
    <p className="error">
     location not found... check the spelling or add a country code: <br /> {"{city name},{country code}"}
    </p>
   ) : null}
  </>
 );
}

export default InputByName;
