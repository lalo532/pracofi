import React from "react";
import { StepIndicator } from "./";

const Step3 = () => {
  return (
    <>
      <StepIndicator step={3} />
      <span className="text-4xl mx-auto mb-4">Nosotros nos encargamos 📝</span>
      <p className="text-2xl">En breve revisaremos su caso.</p>
      <div className="flex flex-col p-4">
        <div className="flex flex-col">
          <div className="flex flex-row border-2 p-4 w-3/4 mx-auto my-4">
            <p className="my-auto">
              ¿Se encuaentra dentro de la Zona Metropolitana de Guadalajara, MX?
            </p>
            <div className="flex flex-col">
              <button
                // disabled="disabled"
                // onClick={handeProced}
                className=" p-4 rounded-2xl border-2 my-2"
              >
                Si
              </button>
              <button
                // disabled="disabled"
                // onClick={handeProced}
                className=" p-4 rounded-2xl border-2 my-2"
              >
                No
              </button>
            </div>
          </div>
          <div className="flex flex-col">
            <label class="inline-flex items-center">
              <input type="checkbox" class="" checked />
              <span class="ml-2">Apruebo que se envie mi informacion.</span>
            </label>
            <label class="inline-flex items-center">
              <input type="checkbox" class="" checked />
              <span class="ml-2">
                Estoy interezado en continuar con el proceso.
              </span>
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Step3;
