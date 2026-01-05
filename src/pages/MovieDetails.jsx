import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchBannerMovie } from "../redux/slices/movieSlice";
import Loader from "../components/Loader";
import MovieBanner from "../components/MovieBanner";
import MovieAbout from "../components/MovieAbout";
import CastSlider from "../components/CastSlider";
import DateSelector from "../components/DateSelector";
import TheaterShowtimes from "../components/TheatreShowTimes";
import FooterBooking from "../components/FooterBooking";
import MovieBooking from "../components/MovieBooking";

const MovieDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { bannerMovie, loading } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchBannerMovie(id));
  }, [dispatch, id]);

  if (loading || !bannerMovie) return <Loader />;

  return (
    <div className="text-white">
      <MovieBanner movie={bannerMovie} />
      <MovieAbout plot={bannerMovie.Plot} />
      <CastSlider cast={bannerMovie.Actors} />
      <MovieBooking />
      <FooterBooking />
    </div>
  );
};

export default MovieDetails;
