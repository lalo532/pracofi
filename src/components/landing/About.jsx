import React from "react";
// import Hero from "../../assets/img/figure1.svg";
// import Header from "../Global/Header";
import Pattern from "../../assets/img/pattern.png";
import BrandLogo from "../../assets/img/logoBrand.png";

const About = () => {
  return (
    <>
      <div className="bg__about_img h-full ">
        <div className="flex flex-row content-center h-full my-auto">
          <div className="text-white my-auto px-8 flex flex-col">
            <img className="w-1/2 " src={BrandLogo} alt="" srcSet="" />
            <p className="my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate, fuga non! Minus est quae quidem commodi esse nemo amet
              alias.
            </p>
            <p className="my-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde
              dolorum odio cumque aperiam dolore veniam officiis deleniti! Id,
              sit necessitatibus.
            </p>
            <ul className="list-disc">
              <li>Lorem ipsum dulor sit amet consectetur adipisicing elit.</li>
              <li>Nam vitae ea, ipsum quo ducimus odit magnam?</li>
              <li>Velit enim a labore, suscipit fugit fugiat. Officia!</li>
              <li>
                Provident cumque quos tempore nostrum, exercitationem suscipit
                laboriosam.
              </li>
              <li>Fugiat minima ab ut dolorum excepturi dolores voluptas.</li>
            </ul>
            <button className="w-2/4 mx-auto my-4 uppercase p-6 bg-blue-regular text-white">
              registrate
            </button>
          </div>
          <img className="h-3/4 mt-auto hidden xl:block" src={Pattern} alt="" srcSet="" />
          {/* <div>
            <img src={Pattern} alt="" srcSet="" />
          </div> */}
        </div>
        {/** Removed because is a landing page, I am not sure how this dessing supouses to work */}
        {/* <Header isAbout={true}/> */}
      </div>
    </>
  );
};

export default About;
