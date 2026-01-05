import React from "react";
import { Link } from "react-router-dom";

const FooterBooking = ({ id }) => (
  <div className="fixed bottom-0 left-0 w-full bg-[#3A0B12] p-4 flex justify-between items-center z-20">
    <p>Selected 1 Seats</p>
    <Link
      to={`/booking/${id}`}
      className="bg-red-600 px-6 py-2 rounded hover:bg-red-700 transition"
    >
      Proceed to Pay
    </Link>
  </div>
);

export default FooterBooking;
