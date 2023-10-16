import LocationCards from "./LocationCards";
import { useState, useEffect } from "react";

function LocationList({ searchLong, searchLat }) {
 const [weather, setWeather] = useState("hello");
 console.log(searchLat, searchLong);
 const appID = "796a348dc20c3239ab56d7cabc4a83bd";
 const url = `https://api.openweathermap.org/data/2.5/weather?lat=${searchLat}&lon=${searchLong}&appid=${appID}`;

 useEffect(() => {
  fetch(url).then((response) => {
   return response.json().then((weatherData) => {
    setWeather(weatherData);
   });
  });
 }, []);

 return (
  <ul>
   Weather by location:
   <LocationCards weather={weather} />
  </ul>
 );
}

export default LocationList;
