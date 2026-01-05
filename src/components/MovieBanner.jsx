import React from "react";

const MovieBanner = ({ movie }) => (
  <div className="relative h-[60vh] w-full">
    <img
      src={movie.Poster}
      alt={movie.Title}
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-[#6C010D]/80 flex flex-col justify-end p-8">
      <h1 className="text-4xl font-bold">{movie.Title}</h1>
      <p className="mt-2 text-sm">
        {movie.imdbRating} | {movie.Runtime} | {movie.Language}
      </p>
      <button className="bg-red-600 px-6 py-3 rounded mt-4 text-white hover:bg-red-700 transition">
        Book Now
      </button>
    </div>
  </div>
);

export default MovieBanner;
