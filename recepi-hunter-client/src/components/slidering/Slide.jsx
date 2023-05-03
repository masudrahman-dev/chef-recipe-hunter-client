import React from "react";
import LazyLoad from "react-lazy-load";

const Slide = ({ s }) => {
  return (
    <div className="keen-slider__slide number-slide1 ">
      <LazyLoad width={762} threshold={0.95}>
        <img src={s?.slide_image} alt="" />
      </LazyLoad>
    </div>
  );
};

export default Slide;
