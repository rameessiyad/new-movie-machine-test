import React, { useRef } from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

const BannerSlider = ({ movies }) => {
  const sliderRef = useRef(null);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "80px",
    slidesToShow: 6,
    speed: 500,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          centerPadding: "20px",
        },
      },
    ],
  };

  return (
    <div className="relative w-full py-2">
      <div className="flex items-center gap-2 ml-28">
        <div className="p-2 border-2 border-[#F91D2170] cursor-pointer">
          <MdKeyboardArrowLeft
            size={30}
            onClick={() => sliderRef.current.slickPrev()}
          />
        </div>
        <div className="p-2 border-2 border-[#F91D2170] cursor-pointer">
          <MdKeyboardArrowRight
            size={30}
            onClick={() => sliderRef.current.slickNext()}
          />
        </div>
      </div>
      <Slider ref={sliderRef} {...settings}>
        {movies?.map((movie) => (
          <div key={movie?.imdbID} className="px-2 mt-8">
            <img
              src={movie?.Poster}
              alt={movie?.Title}
              className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 w-full"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BannerSlider;
