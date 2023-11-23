import { useState } from "react";

export default function LocationCardForecast({ weatherForecast }) {
 const foreCastArr = weatherForecast.list;
 let counter = 0;

 return (
  <>
   <h2>5 Day Forecast</h2>
   <ul className="weather-forecast">
    {foreCastArr.map((data, index) => {
     const iconURL = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
     counter++;
     return (
      <>
       <li key={data.dt_txt}>
        <p className="forecast-temp">{(data.main.temp - 273.15).toFixed(1)} °C</p>
        <p className="forecast-date">
         {data.dt_txt.slice(8, 10)}.{data.dt_txt.slice(5, 7)}.{data.dt_txt.slice(0, 4)}
        </p>
        <p className="forecast-time">{data.dt_txt.slice(11, 13) + ":00"}</p>
        <img className="forecast-img" src={iconURL}></img>
       </li>
       {/* {data.dt_txt.slice(11, 13) === "21" ? <div className="divider"></div> : null} */}
      </>
     );
    })}
   </ul>
  </>
 );
}
