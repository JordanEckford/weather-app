import { MapContainer, TileLayer, useMap } from "react-leaflet";
import LocationCardForecast from "./location5DayForecast";

function LocationDailyForecast({ weather }) {
 console.log("IN DAILY WEATEHR", weather);
 const iconURL = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
 const test = [weather.coord.lat, weather.coord.lon];
 return (
  <div className="daily-weather">
   <p>
    Location: {weather.name}, {weather.sys.country}
   </p>
   <p>Location: {weather.weather[0].description}</p>
   <p>Temperature: {weather.main.temp} </p>
   <p>
    Min: {weather.main.temp_min} Max: {weather.main.temp_max}
   </p>
   <p>Wind speed: {weather.wind.speed}</p>
   <img src={iconURL}></img>
   {/* <div id="map" height="500px">
    <MapContainer center={[weather.coord.lat, weather.coord.lon]} zoom={13} scrollWheelZoom={false}>
     <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
     />
    </MapContainer>
   </div> */}
  </div>
 );
}

export default LocationDailyForecast;
