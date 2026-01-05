import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import { listMoviesApi } from "../api/movieApi";
import BannerSlider from "../components/BannerSlider";

const MovieListing = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    listMoviesApi().then((res) => {
      setMovies(res.data.Search);
    });
  }, []);

  console.log(movies);
  return (
    <div className="">
      <Banner />
      <BannerSlider movies={movies} />
    </div>
  );
};

export default MovieListing;
