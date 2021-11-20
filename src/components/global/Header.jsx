import React, { useState } from "react";
import { MobileMenu, Menu } from ".";
import BrandLogo from "../../assets/img/logo.png";

const Header = () => {
  const [menuFlag, setMenuFlag] = useState(false);
  return (
    <>
      <div className="w-fullmt-2 shadow-xl">
        <div className="w-10/12 mx-auto flex flex-row justify-between">
          {/* <div className="p-2"> */}
          <img className="w-2/12  mr-auto" src={BrandLogo} alt="" srcSet="" />
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
