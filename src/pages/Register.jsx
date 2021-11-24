import React, { useState } from "react";
import { HeaderForms } from "../components/global";
// import { Link } from "react-router-dom";
import { Link, useHistory } from "react-router-dom";
import { RegisterService } from "../services";

const Register = () => {
  // const [userName, setUserName] = useState("");
  const history = useHistory();
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [pasword, setPasword] = useState("");
  const [paswordConfirm, setPaswordConfirm] = useState("");

  // console.log(userName, name, lastName, email, pasword, paswordConfirm);
  const submit = () => {
    // console.log("click");

    RegisterService(name, email, pasword)
      .then((res) => {
        console.log(res);
        if (res.ok) {
          history.push("/login");
        }
      })
      .catch((error) => {
        console.log(error);
      });
    // history.push("/bookings");
    // setSenFlag(true);
  };

  return (
    <>
      <div className="w-screen h-screen flex flex-col bg-white">
        <HeaderForms />
        <div class="bg-blue-dark shadow-md rounded p-8 flex flex-col m-auto w-10/12 h-2/3 lg:w-1/2 lg:h-3/4">
          <div className="w-full lg:w-3/4 m-auto">
            <div class="mb-4">
              <label class="block text-white text-sm font-bold mb-2" for="Name">
                Name
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-black"
                id="Name"
                type="text"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div class="mb-4">
              <label
                class="block text-white text-sm font-bold mb-2"
                for="LastName"
              >
                Last Name
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-black"
                id="LastName"
                type="text"
                placeholder="LastName"
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div class="mb-4">
              <label
                class="block text-white text-sm font-bold mb-2"
                for="username"
              >
                Email
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-black"
                id="username"
                type="text"
                placeholder="Username"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div class="mb-4">
              <label
                class="block text-white text-sm font-bold mb-2"
                for="password"
              >
                Password
              </label>
              <input
                class="shadow appearance-none border border-red rounded w-full py-2 px-3 text-black"
                id="password"
                type="password"
                placeholder="******************"
                onChange={(e) => setPasword(e.target.value)}
              />
            </div>
            <div class="mb-6">
              <label
                class="block text-white text-sm font-bold mb-2"
                for="ConfirmPassword"
              >
                Password
              </label>
              <input
                class="shadow appearance-none border border-red rounded w-full py-2 px-3 text-black"
                id="ConfirmPassword"
                type="password"
                placeholder="******************"
                onChange={(e) => setPaswordConfirm(e.target.value)}
              />
            </div>
            <p class="text-white text-xs italic">Comfirm the password.</p>
            <div class="flex items-center justify-between">
              <button
                // to="/bookings"
                onClick={submit}
                class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded"
              >
                Registrar
              </button>
              <Link
                to="/login"
                class="inline-block align-baseline font-bold text-sm text-white hover:text-blue-darker"
              >
                Already have an account?
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
