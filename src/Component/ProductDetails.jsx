import { FaHeart, FaShareAlt } from "react-icons/fa";
import Header from "./Header";
import Apicalling from "./Apicalling";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../utils/productSlice";

function ProductDetails() {
  let allProduct = Apicalling();
  let { id } = useParams();
  //   console.log(allProduct, "details");
  const cartItems = useSelector((store) => store.cart.item);
  const product = allProduct.find((item) => item.id === parseInt(id));
  //   console.log("sadasdas", product);
  if (!product) {
    return (
      <div>
          <Header />
        <div className=" flex flex-col justify-center text-center ">
          <div className=" mt-10 text-gray-600 my-4 font-bold">
            Product not found...
          </div>
          <div>
            <Link to="/">
            <div className=" w-40 mx-auto  text-center border bg-purple-700 px-3 py-2 my-4 rounded">
              Home
            </div>
          </Link>
          </div>
        </div>
      </div>
    );
  }
  const dispatch = useDispatch();

  function handleItem(product) {
    dispatch(addItem(product));
  }

  return (
    <div>
      <Header />
      <div className="max-w-6xl mx-auto px-6 py-10 ">
        <div className="text-sm text-gray-900 mb-4">
          Home <span className="capitalize">/{product.brand}</span>/
          <span> {product.category}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left - Image */}
          <div className="bg-gray-100 rounded-xl p-10 flex items-center justify-center">
            <img
              src={product.images[0]}
              alt="Product"
              className="max-h-96 object-contain"
            />
          </div>

          {/* Right - Info */}
          <div>
            <span className="text-xs bg-gray-200 px-2 py-1 rounded-full uppercase">
              {product.name}
            </span>
            <h1 className="text-3xl font-bold text-gray-900 mt-2">
              {product.category}
            </h1>

            {/* Rating */}
            <div className="flex items-center space-x-2 mt-2">
              <div className="flex text-yellow-400 text-xl">
                {Array.from({ length: 5 }, (_, i) => (
                  <span key={i}>
                    {i < Math.floor(product.rating) ? "★" : "☆"}
                  </span>
                ))}
                <span className="text-gray-500 text-xs ml-1">
                  {product.rating}
                </span>
              </div>
              {/* <span className="text-gray-500 text-sm">(2.56/5)</span> */}
            </div>

            {/* Price */}
            <div className="flex items-center space-x-4 mt-4">
              <span className="text-2xl font-bold text-gray-900">
                ${product.price}
              </span>
              <span className="line-through text-gray-400">$9.99</span>
              <span className="text-sm bg-red-500 text-white px-2 py-1 rounded">
                10% off
              </span>
            </div>
            <div className="text-green-600 mt-1 text-sm">You save $1.05</div>

            {/* Description */}
            <div className="mt-6">
              <h3 className="text-md font-semibold text-gray-800">
                Description
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                {product.description}
              </p>
            </div>

            {/* Brand */}
            <div className="mt-4">
              <h3 className="text-md font-semibold text-gray-800">
                {product.brand}
              </h3>
              <p className="text-sm text-gray-600 mt-1">{product.brand}</p>
            </div>

            {/* Buttons */}
            <div className="mt-6 flex space-x-3">
              <button
                onClick={() => handleItem(product)}
                className="bg-purple-600 hover:bg-purple-700
               text-white px-6 py-2 rounded-lg font-medium"
              >
                Add More
              </button>
              <button className="p-2 border rounded-lg">
                <FaHeart className="text-gray-600" />
              </button>
              <button className="p-2 border rounded-lg">
                <FaShareAlt className="text-gray-600" />
              </button>
            </div>

            {/* View Cart */}
            <Link to="/productitem">
              <button className="mt-4 w-full border rounded py-2 text-sm text-gray-700 font-medium">
                View Cart
                {
                  cartItems.reduce((total, item) => total + item.quantity, 0) // 🔥 Sum all quantities
                }
              </button>
            </Link>

            {/* Icons Footer */}
            <div className="mt-6 border-t pt-4 grid grid-cols-3 text-center text-sm text-gray-600">
              <div>
                <span className="block text-xl">🚚</span>
                Free Shipping
              </div>
              <div>
                <span className="block text-xl">🔁</span>
                Easy Returns
              </div>
              <div>
                <span className="block text-xl">🛡️</span>
                Warranty
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
