import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Pattern2 from "../assets/img/pattern2.png";
import { Step1, Step2, Step3 } from "../components/scheduleBooking/";

const ScheduleBooking = () => {
  const [notEmty, setNotEmty] = useState(false);
  const [date, setDate] = useState("");
  const [step2, setstep2] = useState(false);
  const [step3, setStep3] = useState(false);

  const [text, setTxt] = useState("");
  const [txt, setText] = useState("");

  useEffect(() => {
    setText(text);
  }, [text]);
  console.log(text);
  const handeProced = () => {
    if (notEmty) {
      setstep2(true);
      setText("");
    }
    if (txt != "") {
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
          <div className="mt-auto p-6"></div>
        </div>

        <div className="text-white flex flex-col pt-6 w-full mx-4">
          {!step2 && (
            <Step1 setDate={setDate} date={date} setNotEmty={setNotEmty} />
          )}
          {step2 && !step3 && <Step2 text={text} setTxt={setTxt} />}
          {step3 && <Step3 />}
          <div className="flex flex-row mt-auto p-6 ">
            <div className=" mr-auto ">
              <Link
                to="/"
                disabled={step2}
                className={`${
                  !step2 ? "block" : "hidden"
                } p-6 border-2 rounded-2xl capitalize text-white`}
              >
                Cancelar
              </Link>
              <button
                // disabled="disabled"
                onClick={prev}
                className={`${
                  !step2 ? "hidden" : "block"
                } p-6 border-2 rounded-2xl capitalize text-white`}
              >
                Anterior
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

export default ScheduleBooking;
