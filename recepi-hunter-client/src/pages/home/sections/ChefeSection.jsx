import React from "react";
import ChefeCard from "./ChefeCard";

const ChefeSection = () => {
  return (
    <section className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex border  flex-wrap items-center  mx-auto p-4">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3   gap-5">
          <ChefeCard></ChefeCard>
          <ChefeCard></ChefeCard>
          <ChefeCard></ChefeCard>
          <ChefeCard></ChefeCard>
          <ChefeCard></ChefeCard>
          <ChefeCard></ChefeCard>
          <ChefeCard></ChefeCard>
          <ChefeCard></ChefeCard>
          <ChefeCard></ChefeCard>
        </div>
      </div>
    </section>
  );
};

export default ChefeSection;
