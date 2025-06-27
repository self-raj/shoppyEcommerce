import { createRoot } from "react-dom/client";
import React from "react";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./Component/Body.jsx";
import Error from "./Component/Error.jsx";
// import ProductDetails from "./Component/ProductDetails.jsx";
 const  ProductDetails= React.lazy(()=> import("./Component/ProductDetails.jsx"))
 const  CheckoutPage= React.lazy(()=> import("./Component/CheckoutPage.jsx"))
 const  CoomingSoon= React.lazy(()=> import("./Component/CoomingSoon.jsx"))
 const  Cart= React.lazy(()=> import("./Component/Cart.jsx"))
// import Cart from "./Component/Cart.jsx";
// import CheckoutPage from "./Component/CheckoutPage.jsx";
// import CoomingSoon from "./Component/CoomingSoon.jsx";
import About from "./Component/About.jsx";
import { Suspense } from "react";

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/product",
        element: <Body />,
      },
      {
        path: "/product/:id",
        element: <Suspense fallback={<div className="text-center mt-10">Loading Product Details...</div>}> <ProductDetails /></Suspense>,
      },
      {
        path: "/cart",
       element: <Suspense fallback={<div className="text-center mt-10">Loading Product Details...</div>}> <Cart /></Suspense>,
      },
      {
        path: "/checkout",
        element: <Suspense fallback={<div className="text-center mt-10">Loading Product Details...</div>}> <CheckoutPage /></Suspense>,
      },
      {
        path: "/categories",
        
        element: <Suspense fallback={<div className="text-center mt-10">Loading Product Details...</div>}><CoomingSoon /></Suspense>,
      },,
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRoute}>
    <App />
  </RouterProvider>
);
