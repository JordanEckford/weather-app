import { useState } from "react";

function Input({ setSearchLat, setSearchLong }) {
  const [userInputLat, setUserInputLat] = useState("");
  const [userInputLong, setUserInputLong] = useState("");

  function handleSubmit(submitEvent) {
    submitEvent.preventDefault();
    setSearchLat(userInputLat);
    setSearchLong(userInputLong);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="client-input-latitude">Latitude:</label>
      <input
        id="client-input-latitude"
        type="text"
        value={userInputLat}
        onChange={(event) => {
          const value = event.target.value;
          setUserInputLat(value);
        }}
      />
      <label htmlFor="client-input-longitude">Longitude:</label>
      <input
        id="client-input-longitude"
        type="text"
        value={userInputLong}
        onChange={(event) => {
          const value = event.target.value;
          setUserInputLong(value);
        }}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Input;
