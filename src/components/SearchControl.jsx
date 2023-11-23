export default function SearchControl({ byLatLong, setByLatLong }) {
 return (
  <>
   {byLatLong ? (
    <button
     className="search-by"
     onClick={() => {
      setByLatLong(false);
     }}
    >
     {" "}
     Search by location name
    </button>
   ) : (
    <button
     className="search-by"
     onClick={() => {
      setByLatLong(true);
     }}
    >
     {" "}
     Search by Lat Long
    </button>
   )}
  </>
 );
}
