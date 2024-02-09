import Products from "./Products";


function Search() {
  // const [searchInput, setSearchInput] = useState("");

  // const searchItems = (searchValue) => {
  //   setSearchInput(searchValue);
  //   const filteredData = APIData.filter((item) => {
  //     return Object.values(item)
  //       .join("")
  //       .toLowerCase()
  //       .includes(searchInput.toLowerCase());
  //   });
  //   setFilteredResults(filteredData);
  // };

   return (
     <div>
       <h2>Use our search bar to find your favorite books</h2>
       <input id="a" placeholder="Search . . ." />

       {/* <Products /> */}
     </div>
   );
}
export default Search