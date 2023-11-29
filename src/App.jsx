import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Input from "./components/Input";
import WeatherHandler from "./components/weatherHandler";
import InputByName from "./components/InputByName";
import SearchControl from "./components/SearchControl";

function App() {
 const [searchLat, setSearchLat] = useState("53.23812");
 const [searchLong, setSearchLong] = useState("-1.3568");
 const [byLatLong, setByLatLong] = useState(false);
 return (
  <>
   <Header />
   <InputByName setSearchLat={setSearchLat} setSearchLong={setSearchLong} />
   <WeatherHandler searchLat={searchLat} searchLong={searchLong} />
  </>
 );
}

export default App;
