import React from "react";
import ImdbLogo from "../assets/imdb-logo.png";
import { Link } from "react-router-dom";
import { FaPlay } from "react-icons/fa";
import { useSelector } from "react-redux";
import Loader from "./Loader";

const Banner = () => {
  const { bannerMovie, loading } = useSelector((state) => state.movies);

  if (loading || !bannerMovie) {
    return <Loader fullScreen />;
  }

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-linear-to-b from-black/80 to-black/5 z-10"></div>
      <div
        className="absolute bottom-0 left-0 w-full h-[33%] 
                  bg-linear-to-t from-[#6C010D] to-transparent z-10"
      ></div>
      <img
        src={bannerMovie.Poster}
        alt={bannerMovie.Title}
        className="w-full h-[90vh] object-cover"
      />

      <div className="absolute top-42 left-28 flex flex-col z-20 gap-4 w-[27%]">
        <h1 className="text-6xl font-semibold">{bannerMovie.Title}</h1>

        <div className="flex items-center gap-2">
          <img src={ImdbLogo} alt="imdb-logo" />
          <p className="text-sm font-light">
            {bannerMovie.imdbRating}{" "}
            <span className="font-extralight text-gray-400">
              ({bannerMovie.imdbVotes})
            </span>{" "}
            {bannerMovie.Year}{" "}
            <span className="font-extralight text-gray-400">|</span>{" "}
            {bannerMovie.Runtime}{" "}
            <span className="font-extralight text-gray-400">|</span>{" "}
            {bannerMovie.Genre}
          </p>
        </div>

        <p className="text-base font-light line-clamp-3">{bannerMovie.Plot}</p>

        <div className="flex gap-4">
          <Link to="/" className="border border-white rounded-lg px-6 py-3">
            Watch trailer
          </Link>

          <Link
            to="/"
            className="bg-linear-to-r from-[#FF383C] to-[#F30005] rounded-lg px-6 py-3 flex gap-4 items-center"
          >
            <FaPlay color="white" />
            <span className="font-medium">Watch Now</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
