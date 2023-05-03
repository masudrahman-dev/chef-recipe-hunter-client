import React from "react";

const RecefiesBanner = ({ data }) => {
  const { about, chef_image, likes, name, total_recefie, year_of_experience } =
    data;
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
          <div className=" grid grid-cols-2 items-center gap-7  ">
            <div className="">
              <h1 className="mb-4 text-3xl font-extrabold tracking-tight leading-none text-gray-900 md:text-4xl lg:text-5xl dark:text-white">
                {name}
              </h1>
              <p className="mb-8 text-lg  text-gray-500   dark:text-gray-400">
                {about}
              </p>
              <div>
                <p>likes : {likes} K</p>
                <p>number of recipes : {total_recefie} pics</p>
                <p>years of experience : {year_of_experience} years</p>
              </div>
            </div>
            <div className="border ">
              <img
                className="w-full   "
                src={
                  chef_image ||
                  "https://savory.qodeinteractive.com/wp-content/uploads/2016/10/left-menu-team4.jpg"
                }
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RecefiesBanner;
