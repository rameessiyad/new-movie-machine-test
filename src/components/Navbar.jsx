import React from "react";
import LogoImg from "../assets/logo.png";
import LocationIcon from "../assets/location-icon.svg";
import { IoSearchOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <header className="flex items-center justify-between p-4 container bg-transparent mx-auto px-30 fixed z-20">
      <div className="flex items-center gap-3">
        <img src={LogoImg} alt="logo" />
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
          <ul className="flex items-center justify-between gap-8">
            <li>New Movies</li>
            <li>Genres</li>
            <li>Country</li>
            <li>Movie</li>
            <li>TV Series</li>
          </ul>
        </nav>

        <div className="px-4 border-l border-white">
          <IoSearchOutline size={20} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
