import React, { useState } from "react";
import Menu from "./Menu";
import MobileMenu from "./MobileMenu";

const Navigation = (props) => {
  const { isLanding } = props;
  const [menuFlag, setMenuFlag] = useState(false);

  return (
    <>
      <div className="p-6">
        <Menu isLanding={isLanding} />
        <MobileMenu
          isLanding={isLanding}
          setMenuFlag={setMenuFlag}
          menuFlag={menuFlag}
        />
      </div>
    </>
  );
};

export default Navigation;
