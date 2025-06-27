import { useEffect, useState } from "react";
import Apicalling from "./Apicalling";
import ProductList from "./ProductList";
import Search from "./Search";
import Header from "./Header";
import { Link } from "react-router-dom";
import Slider from "./Slider";
import Footer from "./Footer";

function Body() {
  const allProduct = Apicalling();

  //   fillter logic caterory wise

  const [category, setCategory] = useState("All Categories");
  const [filteredProduct, setFilteredProduct] = useState([]);

  useEffect(() => {
    if (!allProduct || allProduct.length === 0) return;

    if (category === "All Categories") {
      setFilteredProduct(allProduct);
    } else {
      const filtered = allProduct.filter(
        (item) => item.category.toLowerCase() === category.toLowerCase()
      );
      setFilteredProduct(filtered);
    }
  }, [category, allProduct]);

  return (
    <>
      <Header />
     
      <div className="px-6 py-10  ">
        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-purple-600">
            Discover Amazing Products
          </h1>
          <p className="text-gray-500 mt-2">
            Explore our curated collection of premium products designed to
            enhance your lifestyle
          </p>
        </div>
         <Slider allProduct={allProduct} />
        <div className="mb-5 ">
          <Search
            allProduct={allProduct}
            onSearchResults={setFilteredProduct}
          />
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
          {/* Category Dropdown */}
          <div className="flex items-center space-x-2">
            <svg
              className="w-4 h-4 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2zM3 16a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2z"
              />
            </svg>
            <select
              className="border rounded px-3 py-2 text-sm"
              onChange={(e) => setCategory(e.target.value)}
              value={category}
            >
              <option>All Categories</option>
              <option>beauty</option>
              <option>groceries</option>
              <option>furniture</option>
            </select>
          </div>
        </div>
      </div>

      {/* Product List me filterproduct props paas ho rha hai */}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-9 py-8 ">
        <ProductList allProduct={filteredProduct} />
      </div>
        <Footer/>

    </>
  );
}

export default Body;
