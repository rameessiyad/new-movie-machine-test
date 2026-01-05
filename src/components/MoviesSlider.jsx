import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MoviesSlider = ({ movies, title, cardWidth, cardHeight }) => {
  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    speed: 500,
    arrows: false,
    draggable: true,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="py-6 px-4 mt-4">
      <h2 className="text-3xl text-white mb-4 ml-28 font-semibold">{title}</h2>
      {movies && movies.length > 0 ? (
        <Slider {...settings}>
          {movies.map((movie) => (
            <Link
              to={`/movie/${movie.imdbID}`}
              key={movie.imdbID}
              className="px-2"
            >
              <img
                src={movie.Poster !== "N/A" ? movie.Poster : "/fallback.jpg"}
                alt={movie.Title}
                className="rounded-2xl shadow-lg object-cover hover:scale-105 transition-transform duration-300"
                style={{ width: cardWidth, height: cardHeight }}
              />
            </Link>
          ))}
        </Slider>
      ) : (
        <p className="text-white ml-10">No movies available.</p>
      )}
    </div>
  );
};

export default MoviesSlider;
