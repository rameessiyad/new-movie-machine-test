import React, { useState, useEffect } from "react";
import LogoImg from "../assets/logo.png";
import LocationIcon from "../assets/location-icon.svg";
import { IoClose, IoSearchOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchMovies } from "../redux/slices/movieSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [scrolled, setScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    dispatch(fetchMovies(query));
    navigate(`/search?q=${query}`);
    setQuery("");
    setShowSearch(false);
  };

  return (
    <header
      className={`flex items-center justify-between p-4 container mx-auto px-30 fixed z-20 transition-colors duration-500 ${
        scrolled
          ? "bg-linear-to-b from-black/90 to-black/40 backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center gap-3">
        <Link to="/">
          <img src={LogoImg} alt="logo" />
        </Link>
        <div className="flex items-center gap-2">
          <img src={LocationIcon} alt="location-icon" />
          <div>
            <h3 className="text-lg text-gray-200">Kozhikkode</h3>
            <p className="text-base text-gray-500">Kerala</p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between gap-10">
        <nav>
          <ul className="flex items-center justify-between gap-8 text-white">
            <Link to="/">
              <li>New Movies</li>
            </Link>
            <Link to="/">
              <li>Genres</li>
            </Link>
            <Link to="/">
              <li>Country</li>
            </Link>
            <Link to="/">
              <li>Movie</li>
            </Link>
            <Link to="/">
              <li>TV Series</li>
            </Link>
          </ul>
        </nav>

        <div className="px-4 border-l border-white flex items-center gap-2">
          {showSearch ? (
            <form
              onSubmit={handleSearch}
              className="flex items-center bg-white rounded-lg px-3 py-1"
            >
              <input
                type="text"
                placeholder="Search movies..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="outline-none text-black w-52 text-sm"
                autoFocus
              />
              <IoClose
                size={20}
                className="ml-2 cursor-pointer text-black"
                onClick={() => setShowSearch(false)}
              />
            </form>
          ) : (
            <IoSearchOutline
              size={22}
              className="cursor-pointer text-white"
              onClick={() => setShowSearch(true)}
            />
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
