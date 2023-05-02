import React from "react";
import Banner from "./sections/Banner";
import ChefeSection from "./sections/ChefeSection";
import Test from "./test";
import Promotion from "./sections/Promotion";
import Pricing from "./sections/Pricing";
import Sliding from "../../components/slidering/Sliding";

const Home = () => {
  return (
    <div className="">
      
      <Banner></Banner>
      {/* <Test></Test> */}
      <ChefeSection></ChefeSection>

      <Pricing></Pricing>
      <Sliding></Sliding>
    </div>
  );
};

export default Home;
