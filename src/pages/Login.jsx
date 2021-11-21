import React from "react";
import BrandLogo from "../assets/img/logo.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="w-screen h-screen flex flex-col bg-white">
        <div className="h-1/6 flex flex-col py-8 mb-4">
          <Link to="/">
            <img
              className="w-3/4 lg:w-1/4 m-auto"
              src={BrandLogo}
              alt=""
              srcSet=""
            />
          </Link>
        </div>

        <div class="bg-blue-dark shadow-md rounded p-8 flex flex-col m-auto w-10/12 h-2/3 lg:w-1/2 lg:h-3/4">
          <div className="w-full lg:w-3/4 m-auto">
            <div class="mb-4">
              <label
                class="block text-white text-sm font-bold mb-2"
                for="username"
              >
                Username
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-white"
                id="username"
                type="text"
                placeholder="Username"
              />
            </div>
            <div class="mb-6">
              <label
                class="block text-white text-sm font-bold mb-2"
                for="password"
              >
                Password
              </label>
              <input
                class="shadow appearance-none border border-red rounded w-full py-2 px-3 text-white mb-3"
                id="password"
                type="password"
                placeholder="******************"
              />
              <p class="text-white text-xs italic">Please choose a password.</p>
            </div>
            <div class="flex items-center justify-between">
              <button
                class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded"
                type="button"
              >
                Sign In
              </button>
              <Link
                to="/register"
                class="inline-block align-baseline font-bold text-sm text-white hover:text-blue-darker"
              >
                Create an account firts?
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
