import LocationCards from "./locationDailyForecast";
import LocationCardForecast from "./location5DayForecast";
import { useState, useEffect } from "react";
import weatherObj from "../templateWeatherObj";

function WeatherHandler({ searchLong, searchLat }) {
 const [dailyWeather, setDailyWeather] = useState(weatherObj);
 const [weatherForecast, setWeatherForecast] = useState({
  cod: "200",
  message: 0,
  cnt: 40,
  list: [
   {
    dt: 1661871600,
    main: {
     temp: 296.76,
     feels_like: 296.98,
     temp_min: 296.76,
     temp_max: 297.87,
     pressure: 1015,
     sea_level: 1015,
     grnd_level: 933,
     humidity: 69,
     temp_kf: -1.11,
    },
    weather: [
     {
      id: 500,
      main: "Rain",
      description: "light rain",
      icon: "10d",
     },
    ],
    clouds: {
     all: 100,
    },
    wind: {
     speed: 0.62,
     deg: 349,
     gust: 1.18,
    },
    visibility: 10000,
    pop: 0.32,
    rain: {
     "3h": 0.26,
    },
    sys: {
     pod: "d",
    },
    dt_txt: "2022-08-30 15:00:00",
   },
   {
    dt: 1661882400,
    main: {
     temp: 295.45,
     feels_like: 295.59,
     temp_min: 292.84,
     temp_max: 295.45,
     pressure: 1015,
     sea_level: 1015,
     grnd_level: 931,
     humidity: 71,
     temp_kf: 2.61,
    },
    weather: [
     {
      id: 500,
      main: "Rain",
      description: "light rain",
      icon: "10n",
     },
    ],
    clouds: {
     all: 96,
    },
    wind: {
     speed: 1.97,
     deg: 157,
     gust: 3.39,
    },
    visibility: 10000,
    pop: 0.33,
    rain: {
     "3h": 0.57,
    },
    sys: {
     pod: "n",
    },
    dt_txt: "2022-08-30 18:00:00",
   },
   {
    dt: 1661893200,
    main: {
     temp: 292.46,
     feels_like: 292.54,
     temp_min: 290.31,
     temp_max: 292.46,
     pressure: 1015,
     sea_level: 1015,
     grnd_level: 931,
     humidity: 80,
     temp_kf: 2.15,
    },
    weather: [
     {
      id: 500,
      main: "Rain",
      description: "light rain",
      icon: "10n",
     },
    ],
    clouds: {
     all: 68,
    },
    wind: {
     speed: 2.66,
     deg: 210,
     gust: 3.58,
    },
    visibility: 10000,
    pop: 0.7,
    rain: {
     "3h": 0.49,
    },
    sys: {
     pod: "n",
    },
    dt_txt: "2022-08-30 21:00:00",
   },

   {
    dt: 1662292800,
    main: {
     temp: 294.93,
     feels_like: 294.83,
     temp_min: 294.93,
     temp_max: 294.93,
     pressure: 1018,
     sea_level: 1018,
     grnd_level: 935,
     humidity: 64,
     temp_kf: 0,
    },
    weather: [
     {
      id: 804,
      main: "Clouds",
      description: "overcast clouds",
      icon: "04d",
     },
    ],
    clouds: {
     all: 88,
    },
    wind: {
     speed: 1.14,
     deg: 17,
     gust: 1.57,
    },
    visibility: 10000,
    pop: 0,
    sys: {
     pod: "d",
    },
    dt_txt: "2022-09-04 12:00:00",
   },
  ],
  city: {
   id: 3163858,
   name: "Zocca",
   coord: {
    lat: 44.34,
    lon: 10.99,
   },
   country: "IT",
   population: 4593,
   timezone: 7200,
   sunrise: 1661834187,
   sunset: 1661882248,
  },
 });

 const [isLoading, setIsLoading] = useState(true);
 const [isLoadingForecast, setIsLoadingForecast] = useState(true);
 const [showForecast, setShowForecast] = useState(false);

 const appID = import.meta.env.VITE_WEATHER_KEY;
 const urlDaily = `https://api.openweathermap.org/data/2.5/weather?lat=${searchLat}&lon=${searchLong}&appid=${appID}&units=metric`;
 const urlForecast = `https://api.openweathermap.org/data/2.5/forecast?lat=${searchLat}&lon=${searchLong}&appid=${appID}`;
 function fetchForecasts() {
  fetch(urlDaily).then((response) => {
   return response.json().then((weatherData) => {
    setDailyWeather(weatherData);
    setIsLoading(false);
   });
  });
 }
 function fetch5DayForecasts() {
  fetch(urlForecast).then((response) => {
   return response.json().then((weatherForecastData) => {
    setWeatherForecast(weatherForecastData);
    setIsLoadingForecast(false);
   });
  });
 }

 useEffect(() => {
  fetchForecasts();
  fetch5DayForecasts();
 }, [searchLat, searchLong]);

 // add loading pattern
 if (isLoading || isLoadingForecast) return <p>Loading...</p>;
 return (
  <>
   <LocationCards weather={dailyWeather} />
   <button
    className="more-info"
    onClick={() => {
     setShowForecast(!showForecast);
    }}
   >
    {showForecast ? "hide" : "show"} forecast
   </button>
   {showForecast ? <LocationCardForecast weatherForecast={weatherForecast} /> : null}
  </>
 );
}

export default WeatherHandler;
