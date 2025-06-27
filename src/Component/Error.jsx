import { Link, useRouteError } from "react-router-dom";
import Header from "./Header";

function Error() {
  const err = useRouteError();
  console.log(err);

  return (
  

    <>
      <div className="bg-purple-500 ">
        {" "}
        <div className="flex items-center justify-center space-x-2 py-3">
          <div className="bg-purple-800 text-white w-8 h-8 flex items-center 
                         justify-center rounded-full text-lg font-bold">
            S
          </div>
          <span className="text-xl font-semibold text-gray-800">
            ShoppyGlobe
          </span>
        </div>
      </div>
      <div className=" h-[600px] flex flex-col justify-center items-center bg-white text-center px-4">
        <h1 className="text-[120px] text-purple-800 font-extrabold">404</h1>
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-6">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>

        <div className="flex gap-4 mb-6">
          <Link
          to="/"
          className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-lg text-sm font-medium flex items-center gap-2"
        >
          
          Go Home
        </Link>
          
        </div>

        <p className="text-xl text-gray-500">
          Need help?{" "}
          <a href="#" className="text-blue-600 underline">
            Contact support
          </a>
        </p>
      </div>
    </>
  );
}

export default Error;
