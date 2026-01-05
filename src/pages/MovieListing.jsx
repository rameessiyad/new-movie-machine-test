import React, { useEffect } from "react";
import Banner from "../components/Banner";
import BannerSlider from "../components/BannerSlider";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, fetchUpcomingMovies } from "../redux/slices/movieSlice";
import Loader from "../components/Loader";
import TrendingMoviesSlider from "../components/TrendingMoviesSlider";
import UpcomingMoviesSlider from "../components/UpcomingMoviesSlider";

const MovieListing = () => {
  const dispatch = useDispatch();
  const { list, loading } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchMovies());
    dispatch(fetchUpcomingMovies());
  }, [dispatch]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="">
      <Banner />
      <BannerSlider movies={list} />
      <TrendingMoviesSlider />
      <UpcomingMoviesSlider />
    </div>
  );
};

export default MovieListing;
