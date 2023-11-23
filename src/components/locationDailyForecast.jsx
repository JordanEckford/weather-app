import { MapContainer, TileLayer, useMap } from "react-leaflet";
import LocationCardForecast from "./location5DayForecast";

export default function LocationDailyForecast({ weather }) {
 const iconURL = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
 const test = [weather.coord.lat, weather.coord.lon];
 return (
  <div className="daily-weather">
   <p className="daily-location">
    Currently in {weather.name}, {weather.sys.country}
   </p>
   <p className="daily-description">{weather.weather[0].description.slice(0, 1).toUpperCase() + weather.weather[0].description.slice(1)}</p>
   <p className="daily-temp">{weather.main.temp.toFixed(1)} °C</p>
   <p className="daily-maxmin">
    Min: {weather.main.temp_min.toFixed(1)} °C Max: {weather.main.temp_max.toFixed(1)} °C
   </p>
   <p className="daily-wind">Wind speed: {weather.wind.speed}</p>
   <img className="daily-img" src={iconURL}></img>
  </div>
 );
}
