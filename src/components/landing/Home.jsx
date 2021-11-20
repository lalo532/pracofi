import React from "react";
import { Link } from "react-router-dom";
import Hero from "../../assets/img/figure1.png";
import Logo from "../../assets/img/logoOnly.png";
import Header from "../global/Header";

const Home = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col lg:flex-row w-10/12 mx-auto h-full">
        <div className="h-1/2 my-auto">
          <img className="mx-auto h-1/2 my-auto" src={Hero} alt="" srcSet="" />
        </div>
        <div className="flex flex-col justify-center my-auto">
          <div className="flex flex-row mx-auto mb-6">
            <h1 className="text-center text-4xl font-bold text-blue-regular mr-6">
              hola casa!
            </h1>
            <img className="" src={Logo} alt="" srcSet="" />
          </div>

          <span className="text-center uppercase text-2xl text-blue-regular mb-2">
            transforma tu vida
          </span>
          <p className="w-10/12 mx-auto text-lg text-blue-regular mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            nobis recusandae perspiciatis dolorem fugiat cum commodi!
          </p>
          <Link to="/quote" className="w-3/4 mx-auto uppercase p-6 bg-blue-light text-white text-center">
            cotiza ahora!
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
