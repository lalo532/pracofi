import React, { useState } from "react";
import { MobileMenu, Menu } from ".";
import BrandLogo from "../../assets/img/logo.png";

const Header = () => {
  const [menuFlag, setMenuFlag] = useState(false);
  return (
    <>
      <div className="w-full shadow-xl">
        <div className="w-full lg:w-10/12 mx-auto flex flex-row justify-between">
          {/* <div className="p-2"> */}
          <img className="w-2/3 md:w-1/3 lg:w-2/12 my-2 mx-auto lg:mr-auto" src={BrandLogo} alt="" srcSet="" />
          {/* </div> */}
          <Menu
            menuFlag={menuFlag}
            setMenuFlag={setMenuFlag}
            isLanding={true}
          />
        </div>
      </div>
      <MobileMenu isLanding={true} menuFlag={menuFlag} />
    </>
  );
};

export default Header;
