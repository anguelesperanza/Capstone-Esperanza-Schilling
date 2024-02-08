import Products from "./Products";
function Search() {
   return (
     <div>
       <h2>Use our search bar to find your favorite books</h2>
       <input id="a" placeholder="Search . . ." />

       <Products />
     </div>
   );
}
export default Search