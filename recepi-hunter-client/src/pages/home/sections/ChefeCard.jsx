import React from "react";
import { Link } from "react-router-dom";

const ChefeCard = () => {
  return (
    <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-col items-center justify-center py-12">
          <img
            className="w-36 h-36 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 "
            src="https://source.unsplash.com/user/c_v_r/1600x900"
            alt="Bonnie image"
          />
        <div>
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            Bonnie Green
          </h5>
          <p className=" text-gray-500 dark:text-gray-400">
            Years of experience :
          </p>
          <p className=" text-gray-500 dark:text-gray-400">
            Numbers of recipes :
          </p>
          <p className=" text-gray-500 dark:text-gray-400">Likes :</p>
          <div className="flex mt-4 space-x-3 md:mt-6">
            <Link
              to="/"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              View Recipes
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefeCard;
