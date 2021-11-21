import React, { useState, useEffect } from "react";
import Pattern2 from "../assets/img/pattern2.png";
import { DatePicker } from "../components/booking/";

const Booking = () => {
  const [notEmty, setNotEmty] = useState(false);
  const [date, setDate] = useState("");
  const [step2, setstep2] = useState(false);
  const [step3, setStep3] = useState(false);

  const [text, setTxt] = useState("");
  const [txt, setText] = useState("");
//   const [txtLength, setTxtLength] = useState("");
  //   console.log(notEmty);
  useEffect(() => {
    setText(text);
    // console.log(text.length);
    // setTxtLength(text.length);
  }, [text]);
  console.log(text);
  const handeProced = () => {
    if (notEmty) {
      setstep2(true);
      setText("");
    }
    if (txt != "" ) {
      // setstep2(false);
      setStep3(true);
    }
  };
  const prev = () => {
    if (step3) {
      setStep3(!step3);
    } else if (step2) {
      setstep2(!step2);
    }
  };
  return (
    <>
      <div className="lg:h-screen w-screen bg-blue-dark flex flex-row min-h-screen">
        <div className="hidden h-full w-full lg:w-1/2 bg__quote_img lg:flex">
          <img className="w-full h-full" src={Pattern2} alt="" srcSet="" />
          <div className="mt-auto p-6">
            {/* <button
              onClick={prev}
              className="  p-6 border-2 rounded-2xl capitalize text-white"
            >
              Anterior
            </button> */}
          </div>
        </div>

        <div className="text-white flex flex-col pt-6 w-full mx-4">
          {!step2 && (
            <div className="mt-auto flex flex-col">
              <span className="text-4xl mb-4 mx-auto text-center">Agenda un cita 🤗</span>
              <p className="text-2xl text-center">
                Tomara aproximidamente 5 minutos. ¿Estas listo?
              </p>
              <div className="flex flex-col p-4">
                <DatePicker
                  setDate={setDate}
                  date={date}
                  setNotEmty={setNotEmty}
                />
              </div>
            </div>
          )}
          {step2 && !step3 && (
            <>
              <span className="text-4xl mx-auto mb-4">
                Informacion necesaria para continuar
              </span>
              <p className="text-2xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>

              {/* <div className="flex flex-row my-4">
                <div class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                  <input
                    type="checkbox"
                    name="toggle"
                    id="toggle"
                    class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                  />
                  <label
                    for="toggle"
                    class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
                  ></label>
                </div>
                <label for="toggle" class="text-lg  my-auto">
                  Use my registered address
                </label>
              </div> */}

              <div className="flex flex-col p-4">
                {/* <CountryPicker /> */}
                <textarea
                  className="bg-blue-dark border-2 rounded-xl my-4 text-center"
                  placeholder="Ingrese mas detalles de su caso"
                  name=""
                  onChange={(e) => setTxt(e.target.value)}
                  value={text}
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
            </>
          )}
          {step3 && (
            <>
              <span className="text-4xl mx-auto mb-4">
                Nosotros nos encargamos 📝
              </span>
              <p className="text-2xl">
                En breve revisaremos su caso.
              </p>
              <div className="flex flex-col p-4">
                <div className="flex flex-col">
                  {/* <div className="flex flex-row border-2 p-4 w-3/4 mx-auto my-4">
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Explicabo vitae at iusto veniam saepe vero nostrum?
                    </p>
                    <div className="flex flex-col">
                      <button
                        // disabled="disabled"
                        // onClick={handeProced}
                        className=" p-4 rounded-2xl bg-orangeCustom"
                      >
                        yes
                      </button>
                      <button
                        // disabled="disabled"
                        // onClick={handeProced}
                        className=" p-4 rounded-2xl bg-blue-dark"
                      >
                        no
                      </button>
                    </div>
                  </div> */}
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
                      <span class="ml-2">
                        Apruebo que se envie mi informacion.
                      </span>
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
          )}
          {/* <button
            // disabled="disabled"
            onClick={handeProced}
            className="w-1/3 ml-auto p-4 bg-orangeCustom"
          >
            Proced
          </button> */}
          <div className="flex flex-row mt-auto p-6 ">
            <div className=" mr-auto ">
              <button
                // disabled="disabled"
                onClick={prev}
                className="  p-6 border-2 rounded-2xl capitalize text-white"
              >
                back
              </button>
            </div>

            <div className="ml-auto ">
              <button
                // disabled="disabled"
                onClick={handeProced}
                className="  p-6 border-2 rounded-2xl capitalize text-white"
              >
                {step3 ? "Enviar" : "next"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Booking;
