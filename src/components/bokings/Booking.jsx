import React from "react";

const Booking = (props) => {
  const { algo } = props;
  return (
    <>
      <div className="bg-gray-200 px-6 py-12 flex flex-col">
        <div className="flex flex-row mx-auto flex-nowrap w-full">
          <p className="bold text-xl w-full truncate">Motivo de la consulta: {algo}</p>
        </div>
        <div className="flex flex-row mx-auto w-full">
          <span className="bold text-xl">Fecha: Jueves 11 de agosto del 2021</span>
        </div>
        <div className="flex flex-row mx-auto w-full">
          <span className="bold text-xl">Hora: 12:30</span>
        </div>
      </div>
    </>
  );
};

export default Booking;
