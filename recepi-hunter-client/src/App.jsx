import React from "react";
import Header from "./components/shared/header/Header";
import Footer from "./components/shared/footer/Footer";
import { Outlet } from "react-router-dom";
import ChefeRecefies from "./pages/chefeRecips/ChefeRecefies";
// import CarouselSlider from "./components/CarouselSlider";
// import { Footer } from "flowbite-react";

const App = () => {
  return (
    <div className=" flex flex-col min-h-screen ">
      <Header></Header>
      {/* <CarouselSlider></CarouselSlider> */}
      <ChefeRecefies></ChefeRecefies>
      <Outlet />
      <div className="mt-auto">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default App;
