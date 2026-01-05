import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CastSlider = ({ cast }) => {
  if (!cast) return null;

  const castArray = cast.split(","); // OMDB returns "Actor1, Actor2, Actor3"

  const settings = {
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: false,
    arrows: false,
    autoplay: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 640, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <div className="p-8 mt-4">
      <h2 className="text-2xl font-semibold mb-3">Cast</h2>
      <Slider {...settings}>
        {castArray.map((actor, idx) => (
          <div key={idx} className="p-2">
            <div className="bg-[#4B0D12] rounded-lg p-4 text-center text-sm">
              {actor.trim()}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CastSlider;
