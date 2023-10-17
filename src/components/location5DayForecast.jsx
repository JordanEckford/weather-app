import { useState } from "react";

function LocationCardForecast({ weatherForecast }) {
  if (weatherForecast === undefined) return <p>Loading</p>;
  const foreCastArr = weatherForecast.list;
  return (
    <>
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
    </>
  );
}

export default LocationCardForecast;
