import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";

const MovieListingPage = lazy(() => import("./pages/MovieListing"));
const MovieDetailsPage = lazy(() => import("./pages/MovieDetails"));
const BookingPage = lazy(() => import("./pages/BookingScreen"));
const SearchMoviesPage = lazy(() => import("./pages/SearchMovies"));
const NotFoundPage = lazy(() => import("./pages/Notfound"));

const App = () => {
  return (
    <div className="text-white bg-[#6C010D]">
      <Suspense fallback={<Loader fullScreen />}>
        <Navbar />
        <Routes>
          <Route path="/" element={<MovieListingPage />} />
          <Route path="/movie/:id" element={<MovieDetailsPage />} />
          <Route path="/booking/:id" element={<BookingPage />} />
          <Route path="/search" element={<SearchMoviesPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
