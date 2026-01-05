import React, { useState, useEffect } from "react";
import LogoImg from "../assets/logo.png";
import LocationIcon from "../assets/location-icon.svg";
import { IoSearchOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  // detect scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        // adjust the scroll threshold
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

        <div className="px-4 border-l border-white">
          <IoSearchOutline size={20} className="cursor-pointer" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
