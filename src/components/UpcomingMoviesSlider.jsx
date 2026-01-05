import React from "react";
import { useSelector } from "react-redux";
import MoviesSlider from "./MoviesSlider";

const UpcomingMoviesSlider = () => {
  const { upcomingList } = useSelector((state) => state.movies);

  return (
    <MoviesSlider
      movies={upcomingList}
      title="Upcoming Movies"
      cardWidth="180px"
      cardHeight="300px"
    />
  );
};

export default UpcomingMoviesSlider;
