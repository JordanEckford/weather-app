import LocationCards from "./LocationCards";
import { useState, useEffect } from "react";
import weatherObj from "../templateWeatherObj";

function LocationList({ searchLong, searchLat }) {
 const [weather, setWeather] = useState(weatherObj);
 const [isLoading, setIsLoading] = useState(true);

 const appID = "796a348dc20c3239ab56d7cabc4a83bd";
 const url = `https://api.openweathermap.org/data/2.5/weather?lat=${searchLat}&lon=${searchLong}&appid=${appID}&units=metric`;

 useEffect(() => {
  fetch(url).then((response) => {
   return response.json().then((weatherData) => {
    setWeather(weatherData);
    setIsLoading(false);
   });
  });
 }, [searchLat]);

 // add loading pattern
 if (isLoading) return <p>Loading...</p>;
 return (
  <div>
   Weather by location:
   <LocationCards weather={weather} />
  </div>
 );
}

export default LocationList;
