import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";

const MovieListingPage = lazy(() => import("./pages/MovieListing"));
const MovieDetailsPage = lazy(() => import("./pages/MovieDetails"));
const BookingPage = lazy(() => import("./pages/BookingScreen"));
const NotFoundPage = lazy(() => import("./pages/Notfound"));

const App = () => {
  return (
    <div className="text-white bg-black">
      <Suspense fallback={<Loader />}>
        <Navbar />
        <Routes>
          <Route path="/" element={<MovieListingPage />} />
          <Route path="/movie/:id" element={<MovieDetailsPage />} />
          <Route path="/booking/:id" element={<BookingPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
