import { useState } from "react";

function LocationCardForecast({ weatherForecast }) {
 const foreCastArr = weatherForecast.list;
 return (
  <div className="weather-forecast">
   {foreCastArr.map((data) => {
    const iconURL = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    return (
     <ul key={data.dt_txt}>
      <p>{(data.main.temp - 273.15).toFixed(1)}</p>
      <p>{data.dt_txt}</p>
      <img src={iconURL}></img>
     </ul>
    );
   })}
  </div>
 );
}

export default LocationCardForecast;
