import React from "react";
import { DatePicker } from "./";

const Step1 = (props) => {
  const {setDate, date, setNotEmty} = props;
  return (
    <>
      <div className="mt-auto flex flex-col">
        <span className="text-4xl mb-4 mx-auto text-center">
          Agenda un cita 🤗
        </span>
        <p className="text-2xl text-center">
          Tomara aproximidamente 5 minutos. ¿Estas listo?
        </p>
        <div className="flex flex-col p-4">
          <DatePicker setDate={setDate} date={date} setNotEmty={setNotEmty} />
        </div>
      </div>
    </>
  );
};

export default Step1;
