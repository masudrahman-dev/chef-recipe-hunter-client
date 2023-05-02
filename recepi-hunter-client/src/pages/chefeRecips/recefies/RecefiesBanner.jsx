import React from "react";

const RecefiesBanner = () => {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
          <div className=" grid grid-cols-2 items-center gap-7  ">
            <div className="">
              <h1 className="mb-4 text-3xl font-extrabold tracking-tight leading-none text-gray-900 md:text-4xl lg:text-5xl dark:text-white">
                George Clooney
              </h1>
              <p className="mb-8 text-lg  text-gray-500   dark:text-gray-400">
                Here at Flowbite we focus on markets where technology,
                innovation, and capital can unlock long-term value and drive
                economic growth. innovation, and capital can unlock long-term
                value and drive economic growth.
              </p>
              <div>
                <p>likes : 123M</p>
                <p>number of recipes : 23M</p>
                <p>years of experience : 7</p>
              </div>
            </div>
            <div className="border ">
              <img
                className="w-full   "
                src="https://fastwpdemo.com/newwp/ticrou/wp-content/uploads/2022/09/about-1.png"
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
