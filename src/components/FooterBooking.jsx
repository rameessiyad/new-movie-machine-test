import React from "react";

const FooterBooking = () => (
  <div className="fixed bottom-0 left-0 w-full bg-[#3A0B12] p-4 flex justify-between items-center z-20">
    <p>Selected 1 Seats</p>
    <button className="bg-red-600 px-6 py-2 rounded hover:bg-red-700 transition">
      Proceed to Pay
    </button>
  </div>
);

export default FooterBooking;
