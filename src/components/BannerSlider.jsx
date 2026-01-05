import React from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NextArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 -right-5 transform -translate-y-1/2 z-10 cursor-pointer text-white text-2xl"
    onClick={onClick}
  >
    <FaArrowRight />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 -left-5 transform -translate-y-1/2 z-10 cursor-pointer text-white text-2xl"
    onClick={onClick}
  >
    <FaArrowLeft />
  </div>
);

const BannerSlider = ({ movies }) => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "80px", 
    slidesToShow: 6,
    speed: 500,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
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
      <Slider {...settings}>
        {movies?.map((movie) => (
          <div key={movie?.imdbID} className="px-2">
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
