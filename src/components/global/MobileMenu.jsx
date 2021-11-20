import React from "react";
import { Link } from "react-router-dom";

const MobileMenu = (props) => {
  const { isLanding, menuFlag } = props;
  return (
    <>
      <nav className={`${menuFlag ? "flex justify-center" : "hidden"}`}>
        <ul>
          <li>
            <Link to="/" className="uppercase">
              Home
            </Link>
          </li>
          {isLanding && (
            <>
              <li>
                <Link
                  to={{ pathname: "/", hash: "#about" }}
                  className="uppercase"
                >
                  quienes somos
                </Link>
              </li>
              <li>
                <Link
                  to={{ pathname: "/", hash: "#contact" }}
                  className="uppercase"
                >
                  contacto
                </Link>
              </li>
            </>
          )}

          <li>
            <Link to="/login" className="uppercase">
              Ingresa
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default MobileMenu;
