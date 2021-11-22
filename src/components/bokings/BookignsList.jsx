import React from "react";
import { Booking } from "./";

const BookignsList = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Booking />
        <Booking />
        <Booking />
        <Booking />
        <Booking />
        <Booking />
        <Booking />
        <Booking />
        <Booking />
        <Booking />
      </div>
    </>
  );
};

export default BookignsList;
