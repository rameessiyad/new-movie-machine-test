import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import SuccessMark from "../assets/success-mark.png";
import MovieTicket from "../components/MovieTicket";
import { useDispatch, useSelector } from "react-redux";
import { fetchBannerMovie } from "../redux/slices/movieSlice";
import Loader from "../components/Loader";

const BookingScreen = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { bannerMovie, loading } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchBannerMovie(id));
  }, [dispatch, id]);

  if (loading || !bannerMovie) return <Loader />;
  console.log(bannerMovie, "hubasea");

  //dummy data
  const movie = {
    date: "01/01/2026",
    time: "9:40 PM",
    row: "A",
    seats: "A3"
  }

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-[#6C010D] to-[#A60315] flex items-center justify-center p-4">
      <div className="bg-red-800 rounded-3xl p-10 flex flex-col items-center gap-6 shadow-2xl">
        <div className="rounded-full w-16 h-16 flex items-center justify-center">
          <img src={SuccessMark} alt="success" />
        </div>

        <h1 className="text-white text-2xl font-semibold text-center">
          Booking Successful
        </h1>
        <p className="text-gray-300 text-sm">For {bannerMovie.Title}</p>

        <MovieTicket movie={bannerMovie} date={movie.date} time={movie.time} row={movie.row} seats={movie.seats} />
      </div>
    </div>
  );
};

export default BookingScreen;
