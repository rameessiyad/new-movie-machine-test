import React from "react";
import { useSelector } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
import Loader from "../components/Loader";

const SearchMovies = () => {
  const { list, loading } = useSelector((state) => state.movies);
  const [params] = useSearchParams();
  const query = params.get("q");

  if (loading) return <Loader />;

  return (
    <div className="pt-28 container mx-auto text-white">
      <h2 className="text-2xl mb-6">Search results for "{query}"</h2>

      {list.length === 0 ? (
        <p className="text-gray-400">No movies found</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {list.map((movie) => (
            <Link
              key={movie.imdbID}
              to={`/movie/${movie.imdbID}`}
              className="group"
            >
              <div className="bg-[#1A0004] rounded-lg overflow-hidden">
                <img
                  src={movie.Poster !== "N/A" ? movie.Poster : "/no-image.png"}
                  alt={movie.Title}
                  className="w-full h-72 object-cover group-hover:scale-105 transition"
                />
                <div className="p-3">
                  <h3 className="text-sm font-semibold">{movie.Title}</h3>
                  <p className="text-xs text-gray-400">{movie.Year}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchMovies;
