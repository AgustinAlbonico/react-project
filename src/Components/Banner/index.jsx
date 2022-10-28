import React, { useState, useEffect, useRef } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import Slider1 from "../../Assets/img/Slider/Slide1.png";
import Slider2 from "../../Assets/img/Slider/Slide2.jpg";
import Slider3 from "../../Assets/img/Slider/Slide3.jpg";
import Slider4 from "../../Assets/img/Slider/Slide4.png";
import Slider5 from "../../Assets/img/Slider/Slide5.png";
import Slider6 from "../../Assets/img/Slider/Slide6.jpg";

const sliders = [Slider1, Slider2, Slider3, Slider4, Slider5, Slider6];

let count = 0;
let slideInterval;

export const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sliderRef = useRef();

  const removeAnimation = () => {
    sliderRef.current.classList.remove("fade-anim");
  };

  const pauseSlider = () => {
    clearInterval(slideInterval);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    startSlider();
    sliderRef.current.addEventListener("animationend", removeAnimation);
    sliderRef.current.addEventListener("mouseenter", pauseSlider);
    sliderRef.current.addEventListener("mouseleave", startSlider);

    return () => {
      clearInterval(slideInterval);
    };
  }, [currentIndex]);

  const startSlider = () => {
    slideInterval = setInterval(() => {
      handleOnNextClick();
    }, 5000);
  };

  const handleOnNextClick = () => {
    count = (count + 1) % sliders.length;
    setCurrentIndex(count);
    sliderRef.current.classList.add("fade-anim");
  };

  const handleOnPrevClick = () => {
    const slidesLength = sliders.length;
    count = (currentIndex + sliders.length - 1) % sliders.length;
    setCurrentIndex(count);
  };

  return (
    <section ref={sliderRef} className="w-full h-full select-none relative">
      <div className="flex justify-center items-end aspect-w-16 aspect-h-9">
        <img src={sliders[currentIndex]} className="" alt="" />

        <div className="hidden md:flex absolute justify-center mb-6">
          {sliders.map((slide, slideIndex) => (
            <div
              className={
                slideIndex === currentIndex
                  ? "text-rose-800 cursor-pointer font-bold text-4xl"
                  : "cursor-pointer font-bold text-4xl text-white"
              }
              key={slideIndex}
              onClick={() => {
                goToSlide(slideIndex);
              }}
            >
              ●
            </div>
          ))}
        </div>
      </div>
      <div className="absolute w-full top-1/2 transform -translate-y-1/2 px-6 flex justify-between items-center">
        <button onClick={handleOnPrevClick}>
          <BsFillArrowLeftCircleFill size={40} color="white"/>
        </button>
        <button onClick={handleOnNextClick}>
          <BsFillArrowRightCircleFill size={40} color="white" />
        </button>
      </div>
    </section>
  );
};
