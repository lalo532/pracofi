import React from "react";

const Booking = () => {
  return (
    <>
      <div className="bg-gray-200 p-6 flex flex-col">
        <div className="flex flex-row mx-auto">
          <span className="bold text-xl">Motivo de la consulta: </span>
          <h2 className="text-xl">Tema</h2>
        </div>
        <div className="flex flex-row mx-auto">
          <span className="bold text-xl">Fecha: </span>
          <h2 className="text-xl">Jueves 11 de agosto del 2021</h2>
        </div>
        <div className="flex flex-row mx-auto">
          <span className="bold text-xl">Hora: </span>
          <h2 className="text-xl">12:30</h2>
        </div>
      </div>
    </>
  );
};

export default Booking;
