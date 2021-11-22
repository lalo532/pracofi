import React from "react";
import { BookignsList } from "../components/bokings/";
import { HeaderUser } from "../components/global/";

const Bookings = () => {
  return (
    <>
      <HeaderUser />
      <div className="flex flex-col w-10/12 m-auto">
        <BookignsList />
      </div>
    </>
  );
};

export default Bookings;
