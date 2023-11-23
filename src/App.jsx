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
   {byLatLong ? <Input setSearchLat={setSearchLat} setSearchLong={setSearchLong} /> : <InputByName setSearchLat={setSearchLat} setSearchLong={setSearchLong} />}
   <SearchControl byLatLong={byLatLong} setByLatLong={setByLatLong} />
   <WeatherHandler searchLat={searchLat} searchLong={searchLong} />
  </>
 );
}

export default App;
