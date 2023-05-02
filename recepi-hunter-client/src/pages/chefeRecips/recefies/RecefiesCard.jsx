import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const RecefiesCard = () => {
  const [rating, setRating] = useState(4);
  return (
    <div className="  w-full ">
      <div className=" bg-white  border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className=" flex justify-center">
          <div className="my-10 flex flex-col items-center">
            <img
              //   className="border "
              className="w-48 h-48 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 "
              src="https://fastwpdemo.com/newwp/ticrou/wp-content/uploads/2019/01/shop-1.png"
            />

            <h5 className="mb-2 mt-5 text-xl font-medium text-gray-900 dark:text-white">
              Penne pasta with meatball
            </h5>
            <p className=" text-gray-500 dark:text-gray-400">
              Years of experience : 4 Years
            </p>
            <p className=" text-gray-500 dark:text-gray-400">
              Numbers of recipes : 12
            </p>
            <p className=" text-gray-500 dark:text-gray-400">Likes : 5M</p>
            <Rating
              style={{ maxWidth: 180 }}
              value={rating}
              onChange={setRating}
            />

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
    </div>
  );
};

export default RecefiesCard;
