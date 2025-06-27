import React from "react";
import { FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import {
  addItem,
  clearCart,
  decreaseItem,
  removeItem,
} from "../utils/productSlice";
import { Link, useParams } from "react-router-dom";
import Apicalling from "./Apicalling";

function Cart() {

  // jb bhi ham quntity add karene total quantity ko add karega
  const cartItems = useSelector((store) => store.cart.item);
  const totalPrice = cartItems.reduce((sum, item) => {
  return sum + item.price * item.quantity;
}, 0);

  const { id } = useParams();
  let allProduct = Apicalling();
  const product = allProduct.find((item) => item.id === parseInt(id));
  const dispatch = useDispatch();

  // cart ke item all clear kar dega
  function handleItem() {
    dispatch(clearCart());
  }
  // ak ak item do delete karega id ke hissab  se
  function handleremoveItem(id) {
    dispatch(removeItem(id));
  }
  return (
    <>
    {/* jb cartItem me= 0 item hoga to cart me Your cart is empty  show karega */}
      {cartItems.length === 0 ? (
        <div>
          <Header />
          <div className="flex flex-col items-center justify-center h-[70vh] text-center">
            <div className="bg-gray-100 p-6 rounded-full mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.1 19a1 1 0 001 1h12a1 1 0 001-1l-1-4H7z"
                />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Your cart is empty
            </h2>
            <p className="text-sm text-gray-500 mb-6">
              Looks like you haven't added any items to your cart yet.
            </p>
            <Link
              to="/"
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-md font-medium mb-2"
            >
              ← Continue Shopping
            </Link>
            <p className="text-sm text-gray-400">
              Discover our amazing collection of products
            </p>
          </div>
        </div>
      ) : (
        <div>
          <Header />
          <div className="max-w-7xl mx-auto px-6 py-10">
            <div className="flex max-w-full mx-auto justify-between">
              <h1 className="text-3xl font-bold mb-2">Shopping Cart</h1>
              <button
                onClick={() => handleItem()}
                className="text-red-500 flex items-center gap-1 border px-3 rounded-xl hover:bg-red"
              >
                <FaTrash /> Clear Cart
              </button>
            </div>
            <p className="text-gray-500 mb-6">
              {
                cartItems.reduce((total, item) => total + item.quantity, 0) //  Sum all quantities
              }
              items in your cart
            </p>

            <div className="flex flex-col lg:flex-row gap-8">
              {/* Cart Items */}
              <div className="w-full lg:w-2/3 rounded-lg p-6  bg-[#ffffff] h-auto">
                <div className="border p-5">
                  <div className="flex justify-between items-center mb-4  ">
                    <h2 className="text-lg font-semibold">Cart Items</h2>
                  </div>

                  {/* Single Item */}
                  {cartItems.map((item, i) => (
                    <div
                      key={i}
                      className="flex justify-between items-center py-4 border-b"
                    >
                      <Link to={`/product/${item.id}`}>
                        <div className="flex items-center gap-4  ">
                          <img
                            src={item.images[0]}
                            alt={item.name}
                            className="w-16 h-16 object-contain border"
                          />
                          <div>
                            <h3 className="font-medium">{item.brand}</h3>
                            <p className="text-sm text-gray-500">
                              ${item.price.toFixed(2)} each
                            </p>
                          </div>
                        </div>
                      </Link>
{/* decrease function */}
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => dispatch(decreaseItem(item.id))}
                          className="w-8 h-8 border rounded text-lg"
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() => dispatch(addItem(item))}
                          className="w-8 h-8 border rounded text-lg"
                        >
                          +
                        </button>
                      </div>

                      <div className="flex items-center gap-4">
                        <span className="font-semibold">
                          ${ (item.price * item.quantity).toFixed(2) }
                        </span>
                        <button onClick={() => handleremoveItem(item.id)}>
                          <FaTrash className="text-gray-500 hover:text-red-500" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <Link to="/product">
                <button className="mt-6 flex items-center gap-2 text-sm text-purple-600">
                  ← Continue Shopping
                </button>
                </Link>
              </div>

              {/* Order Summary */}
              <div className="w-full lg:w-1/3 bg-white rounded-lg border p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm bg-gray-200 px-2 py-1 rounded-full">
                    {
                      cartItems.reduce(
                        (total, item) => total + item.quantity,
                        0
                      ) //  Sum all quantities
                    }
                  </span>
                </div>
                <h2 className="text-lg font-semibold mb-4">Order Summary</h2>

                <div className="space-y-2 text-sm text-gray-700">
                  <div className="flex justify-between">
                    <span>Subtotal  {
                      cartItems.reduce(
                        (total, item) => total + item.quantity,
                        0
                      ) // 🔥 Sum all quantities
                    } items</span>
                    <span>${totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span className="text-green-600 font-medium">FREE</span>
                  </div>
                  
                </div>

                <div className="flex justify-between mt-4 font-bold text-lg">
                  <span>Total</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>

                <Link to="/checkout">
                <button className="mt-6 w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 font-semibold">
                  Proceed to Checkout
                </button>
                
                </Link>

                <p className="text-xs text-center text-gray-500 mt-2">
                  Secure checkout powered by Stripe
                </p>

                <div className="mt-6">
                  <h3 className="text-sm font-medium mb-2">We Accept</h3>
                  <div className="flex gap-2 text-xs">
                    <span className="px-2 py-1 bg-gray-100 rounded">VISA</span>
                    <span className="px-2 py-1 bg-gray-100 rounded">MC</span>
                    <span className="px-2 py-1 bg-gray-100 rounded">AMEX</span>
                    <span className="px-2 py-1 bg-gray-100 rounded">
                      PayPal
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Cart;
