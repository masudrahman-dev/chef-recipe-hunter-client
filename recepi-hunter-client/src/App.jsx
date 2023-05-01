import React from "react";
import Header from "./components/shared/header/Header";
import Footer from "./components/shared/footer/Footer";
// import CarouselSlider from "./components/CarouselSlider";
// import { Footer } from "flowbite-react";

const App = () => {
  return (
    <div className=" flex flex-col min-h-screen ">
      <Header></Header>
      {/* <CarouselSlider></CarouselSlider> */}
  
      <div className="mt-auto">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default App;
