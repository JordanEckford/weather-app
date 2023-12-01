export const GetLocation = ({ setSearchLat, setSearchLong }) => {
 function handleClick() {
  navigator.geolocation.getCurrentPosition((position) => {
   setSearchLat(position.coords.latitude);
   setSearchLong(position.coords.longitude);
  });
 }

 return (
  <div className="location-button-container">
   <button className="location-button" onClick={handleClick}>
    Use current location
   </button>
  </div>
 );
};
