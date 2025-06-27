import { FaEye, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

// allproduct ko yaha par props paas kiya hai  jaga par all product hoga
function ProductList({ allProduct }) {
  if (!Array.isArray(allProduct) || allProduct.length === 0) {
    return (
      <div>
        <p className=" w-full text-xl m-auto font-bold">No products found.</p>;
      </div>
    );
  }

  return allProduct.map((items, index) => {
    return (
      <Link to={`/product/${items.id}`}>
        <div>
          <div
            key={index}
            className=" hover:text-purple-700  transition-all duration-300 
                         ease-in-out transform hover:scale-105"
          >
            {/* Product Card */}
            <div
              className="border rounded-xl overflow-hidden shadow-sm
                            hover:shadow-md transition duration-300 bg-white"
            >
              {/* Discount Badge */}
              <div
                className="absolute bg-red-500 text-white text-xs
                             font-bold px-2 py-1 rounded-br-xl z-10"
              >
                {items.discountPercentage}%
              </div>

              {/* Image */}
              <div className="relative overflow-hidden group">
                <img
                  src={items.images[0]}
                  alt="Product"
                  className="w-full h-56 object-contain bg-gray-100 p-4 
                   transition-all duration-300 ease-in-out 
                   transform group-hover:scale-110  hover:bg-[#00000052]"
                />

                {/* Eye + User Icon */}
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                  opacity-0 group-hover:opacity-100 
                  transition-opacity duration-300 
                  flex gap-4 justify-center items-center text-2xl text-white"
                >
                  <FaUser />
                  <FaEye />
                </div>
              </div>

              {/* Details */}
              <div className="p-4">
                <p className="text-xs text-gray-500 uppercase font-medium mb-1">
                  {items.category}
                </p>
                <h3 className="text-base font-semibold mb-1 line-clamp-2">
                  {items.title}
                </h3>

                {/* Rating */}
                <div className="flex items-center text-yellow-500 text-2xl mb-2">
                  {Array.from({ length: 5 }, (_, i) => (
                    <span key={i}>
                      {i < Math.floor(items.rating) ? "★" : "☆"}
                    </span>
                  ))}
                  <span className="text-gray-500 text-xs ml-1">
                    {items.rating}
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-baseline space-x-2 mb-4">
                  <span className="text-lg font-bold text-gray-800">
                    ${items.price}
                  </span>
                  <span className="text-sm line-through text-gray-400">
                    $9.99
                  </span>
                </div>

                {/* Button */}
                {/* <button className="w-full flex items-center justify-center bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold py-2 rounded-xl">
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.3 5.2A1 1 0 007 20h10a1 1 0 001-1l-1-4H7z"
                />
              </svg>
              Add to Cart
            </button> */}
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  });
}

export default ProductList;
