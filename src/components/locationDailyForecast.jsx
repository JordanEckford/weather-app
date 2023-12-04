import { MapContainer, TileLayer, useMap } from "react-leaflet";
import LocationCardForecast from "./location5DayForecast";

export default function LocationDailyForecast({ weather }) {
 const iconURL = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
 const date = new Date().toJSON();
 console.log(weather);
 return (
  <div className="daily-weather">
   <div className="daily-date">
    <p className="daily-date-text">
     {date.slice(8, 10)}-{date.slice(5, 7)}-{date.slice(0, 4)} ----- {date.slice(11, 16)}
    </p>
   </div>
   <div className="location-description">
    <p className="daily-location">
     {weather.name}, {weather.sys.country}
    </p>
    <p className="daily-description">{weather.weather[0].description.slice(0, 1).toUpperCase() + weather.weather[0].description.slice(1)}</p>
   </div>
   <p className="daily-maxmin">
    Min: {weather.main.temp_min.toFixed(1)} °C <br /> Max: {weather.main.temp_max.toFixed(1)} °C
   </p>
   <p className="daily-wind">Wind: {weather.wind.speed}mph</p>
   <div className="daily-temp-container">
    <p className="daily-temp">{weather.main.temp.toFixed(1)} °C</p>
   </div>
   <img className="daily-img" src={iconURL}></img>
  </div>
 );
}
