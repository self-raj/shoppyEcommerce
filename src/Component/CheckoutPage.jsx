
import { useSelector } from "react-redux";
import Header from "./Header";

function CheckoutPage() {

  const cartItems = useSelector((store) => store.cart.item);
  const totalPrice = cartItems.reduce((sum, item) => {
  return sum + item.price * item.quantity;
}, 0);

  return (
    <>
    <Header/>
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-6 text-center">Checkout</h2>

        {/* Shipping Info */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Shipping Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="border p-2 rounded w-full"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="border p-2 rounded w-full"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="border p-2 rounded w-full"
            />
            <input
              type="text"
              placeholder="Street Address"
              className="border p-2 rounded w-full"
            />
            <input
              type="text"
              placeholder="City"
              className="border p-2 rounded w-full"
            />
            <input
              type="text"
              placeholder="Pin Code"
              className="border p-2 rounded w-full"
            />
          </div>
        </div>

        {/* Cart Summary */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Order Summary</h3>
          <div className="flex justify-between">
            <span> {
                cartItems.reduce((total, item) => total + item.quantity, 0) //  Sum all quantities
              } Items</span>
            <span>${totalPrice. toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping</span>
            <span className="text-green-600">Free</span>
          </div>
          <div className="flex justify-between font-bold text-lg mt-2">
            <span>Total</span>
            <span>${totalPrice. toFixed(2)}</span>
          </div>
        </div>

        {/* Payment */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Payment Method</h3>
          <select className="w-full border p-2 rounded">
            <option value="card">Credit/Debit Card</option>
            <option value="cod">Cash on Delivery</option>
            <option value="upi">UPI</option>
          </select>
        </div>

        {/* Place Order */}
        <button className="w-full bg-purple-600 text-white py-3 rounded text-lg font-medium hover:bg-purple-700">
          Place Order
        </button>
      </div>
    </div>
    </>
  );
}

export default CheckoutPage;
