function LocationCards({ weather }) {
  const iconURL = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
  return (
    <div>
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

      <div>Map???</div>
    </div>
  );
}

export default LocationCards;
