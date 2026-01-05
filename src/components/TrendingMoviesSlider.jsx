import React from "react";
import { useSelector } from "react-redux";
import MoviesSlider from "./MoviesSlider";

const TrendingMoviesSlider = () => {
  const { list } = useSelector((state) => state.movies);

  return (
    <MoviesSlider
      movies={list}
      title="Trending Movies Near You"
      cardWidth="260px"
      cardHeight="150px"
    />
  );
};

export default TrendingMoviesSlider;