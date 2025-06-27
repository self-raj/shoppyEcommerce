
import { FaSearch } from "react-icons/fa";

function Search({ allProduct, onSearchResults }) {
  function setSearchText(searchText) {
    let search = allProduct.filter((item) =>  item.title.toLowerCase().includes(searchText.toLowerCase()));
    onSearchResults(search);
    
  }
  return (
    <div className="relative w-7xl mx-auto">
      <input
       
        onChange={(e) => setSearchText(e.target.value)}
        type="text"
        placeholder="Search products..."
        className="pl-10 pr-4 py-2 rounded-lg border border-purple-700 text-sm focus:outline-none md:w-2/6  w-full"
      />
      <FaSearch className="absolute left-3 top-2.5 text-gray-400 text-sm" />
    </div>
  );
}

export default Search;
