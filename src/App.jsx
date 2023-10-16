import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Input from "./components/Input";
import LocationList from "./components/LocationList";

function App() {
 const [searchLat, setSearchLat] = useState("");
 const [searchLong, setSearchLong] = useState("");

 return (
  <>
   <Header />

   <Input setSearchLat={setSearchLat} setSearchLong={setSearchLong} />

   <LocationList searchLat={searchLat} searchLong={searchLong} />
  </>
 );
}

export default App;
