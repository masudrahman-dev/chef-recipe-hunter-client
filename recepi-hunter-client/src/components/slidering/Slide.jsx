import React from "react";

const Slide = ({ s }) => {

  return (
    <div className="keen-slider__slide number-slide1 ">
      <img src={s.slide_image} alt="" />
    </div>
  );
};

export default Slide;
