import React from "react";
import ChefeCard from "./ChefeCard";
import { Link } from "react-router-dom";

const ChefeSection = () => {
  return (
    <section className="bg-white border-gray-200 dark:bg-gray-900 ">
      <div className="text-center p-12  ">
        <h1 className="text-4xl font-semibold">CHEFES</h1>
        <p className="text-2xl">Everything You want to know</p>
      </div>
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7   items-center justify-center p-4">
        <ChefeCard></ChefeCard>
        <ChefeCard></ChefeCard>
        <ChefeCard></ChefeCard>
        <ChefeCard></ChefeCard>
        <ChefeCard></ChefeCard>
        <ChefeCard></ChefeCard>
      </div>
    </section>
  );
};

export default ChefeSection;
