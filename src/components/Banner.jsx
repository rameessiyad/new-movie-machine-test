import React from "react";
import BannerImg from "../assets/banner.png";
import ImdbLogo from "../assets/imdb-logo.png";
import { Link } from "react-router-dom";
import { FaPlay } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/5 z-10"></div>
      <img
        src={BannerImg}
        alt="banner"
        className="w-fit h-[40%] object-cover"
      />

      <div className="absolute top-50 left-28 flex flex-col z-20 gap-4 w-[27%]">
        <h1 className="text-6xl font-semibold">
          Spider man <br /> No Way Home
        </h1>

        <div className="flex items-center gap-2">
          <img src={ImdbLogo} alt="imdb-logo" />
          <p className="text-sm font-light">
            8.2 <span className="font-extralight text-gray-400">(12.827)</span>{" "}
            2021 <span className="font-extralight text-gray-400">|</span> 1 hour
            55 minutes <span className="font-extralight text-gray-400">|</span>{" "}
            Sci-fi
          </p>
        </div>

        <p className="text-base font-light">
          Scelerisque sed ultricies tristique. Mi in vivamus aliquam varius eu
          felis. Id ultricies diam turpis mi tincidunt. Ut morbi sed urna tempor
          imperdiet eu scelerisque egestas. Interdum mi orci suspendisse in s...
        </p>

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
