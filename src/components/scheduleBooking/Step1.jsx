import React from "react";
import { DatePicker } from "./";

const Step1 = (props) => {
  const { setDate, date, setNotEmty } = props;
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
          <div className="flex flex-col my-1">
            <label className="block mx-auto mb-2">
              <span className="text-white  font-semibold">
                Motivo de consulta
              </span>
            </label>
            <select
              name="reason"
              className="bg-white text-black border-2 rounded-lg p-2 w-2/3 lg:w-1/2 mx-auto"
              // value={values.reason}
              // onChange={handleChange}
              // onBlur={handleBlur}
            >
              <option>Seleccione</option>
              {/* {loading ? (
                  <option>Cargando...</option>
                ) : (
                  topics.map((topic, index) => (
                    <option key={index} value={topic.id}>
                      {topic.name}
                    </option>
                  ))
                )} */}
            </select>
            {/* <ErrorMessage
                name="reason"
                component="div"
                className="italic font-bold font-sans text-red-500"
              /> */}
          </div>

        </div>
      </div>
    </>
  );
};

export default Step1;
