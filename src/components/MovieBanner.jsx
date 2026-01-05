import React from "react";

const MovieBanner = ({ movie }) => {
    console.log(movie, "osdf")
  return (
    <div className="relative h-[74vh] w-full">
      <img
        src={movie.Poster}
        alt={movie.Title}
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-linear-to-b from-black/70 to-black/30"></div>
      <div className="absolute top-30 left-20 flex items-center p-6 rounded-lg gap-6 max-w-4xl">
        <div>
          <img
            src={movie.Poster}
            alt={movie.Title}
            className="w-60 h-80 object-cover rounded-xl shadow-lg"
          />
        </div>

        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-bold text-white">{movie.Title}</h1>
            <p className="mt-2 text-sm text-gray-200">
              {movie.imdbRating} | {movie.Runtime} | {movie.Language}
            </p>
          </div>

          <button className="bg-linear-to-r from-[#FF383C] to-[#F30005] px-6 py-3 rounded-lg mt-4 text-white font-semibold hover:scale-105 transition w-72">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieBanner;
