import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Input from "./components/Input";
import LocationList from "./components/weatherHandler";
import InputByName from "./components/InputByName";

function App() {
  const [searchLat, setSearchLat] = useState("53.23812");
  const [searchLong, setSearchLong] = useState("-1.3568");
  const [byLatLong, setByLatLong] = useState(false);
  return (
    <>
      <Header />
      {byLatLong ? (
        <button
          onClick={() => {
            setByLatLong(false);
          }}>
          {" "}
          Change to name
        </button>
      ) : (
        <button
          onClick={() => {
            setByLatLong(true);
          }}>
          {" "}
          change to Lat Long
        </button>
      )}

      {byLatLong ? (
        <Input setSearchLat={setSearchLat} setSearchLong={setSearchLong} />
      ) : (
        <InputByName
          setSearchLat={setSearchLat}
          setSearchLong={setSearchLong}
        />
      )}

      <LocationList searchLat={searchLat} searchLong={searchLong} />
    </>
  );
}

export default App;
