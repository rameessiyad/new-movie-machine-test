import React from "react";
import { Link } from "react-router-dom";

const Notfound = () => {
  return (
    <div className="flex items-center justify-center">
      <h1>The page you are looking for is not found</h1>
      <Link to={"/"} className="bg-black text-white rounded-sm p-4">
        Back to home Home
      </Link>
    </div>
  );
};

export default Notfound;
