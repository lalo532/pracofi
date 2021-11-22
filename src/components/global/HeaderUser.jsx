import { useState } from "react";
import { Link } from "react-router-dom";
import UserIcon from "../../assets/img/icons/user.svg";
import Logo from "../../assets/img/logo.png";

const HeaderUser = () => {
  const [openNav, setOpenNav] = useState(false);
  const [openDropDnw, setOpenDropDnw] = useState(false);
  const [hoverDates, setHoverDates] = useState(false);
  const [hoverProfile, setHoverProfile] = useState(false);
  //   const [currentUser, setCurrentUser] = useState(authenticationService.currentUserValue);

  const handleNav = () => {
    setOpenNav(!openNav);
  };
  const handleDropDwn = () => {
    setOpenDropDnw(!openNav);
  };
  const handleHoverDates = () => {
    setHoverDates(!hoverDates);
  };

  const handleHoverProfile = () => {
    setHoverProfile(!hoverProfile);
  };
  return (
    <>
      <div className="flex flex-row w-11/12 mx-auto my-2">
        <img className="h-24 my-auto" src={Logo} alt="" srcset="" />
        <div className="hidden lg:block md:w-6/12 lg:w-4/12 xl:w-3/12 ml-auto my-auto">
          <div className="inline-block w-32 mr-10">
            <Link
              onClick={handleDropDwn}
              onMouseOver={handleDropDwn}
              className=" w-full overflow-hidden focus:outline-none ml-8 whitespace-nowrap inline-flex items-center justify-center px-0.5 py-2 border border-transparent shadow-sm text-base font-medium text-white bg-mattBlack bg-opacity-75 hover:bg-opacity-100 block"
            >
              Mi Cuenta
              {/* <img className="ml-2 w-3 h-3" src={ArrowDonw} alt="" /> */}
            </Link>
          </div>

          <div className="inline-block w-32">
            <Link
              to="/"
              // onClick={logout}

              className="w-full ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm text-base font-medium text-white bg-blue-dark bg-opacity-75 hover:bg-opacity-100"
            >
              Cerrar Sesión
            </Link>
          </div>

          <div
            onMouseLeave={() => setOpenDropDnw(false)}
            className={`absolute w-32 ml-8 mr-10  z-10  bg-gray-200 ${
              openDropDnw ? "" : "hidden"
            }`}
          >
            <div
              onMouseOver={handleHoverDates}
              onMouseLeave={() => setHoverDates(false)}
              className={`bg-gray-200 w-full h-1/2 block ${
                hoverDates ? "bg-gray-800 text-white" : ""
              }   box-border`}
            >
              <Link to="/bookings" className="block">
                <p className="block text-center p-2">Mis Citas</p>
              </Link>
            </div>

            <div
            //   onMouseOver={handleHoverProfile}
            //   onMouseLeave={() => setHoverProfile(false)}
            //   className={`bg-gray-200 w-full h-1/2 block ${
            //     hoverProfile ? "bg-gray-800 text-white" : ""
            //   }  box-border`}
            >
              <Link to="/profile" className="block">
                <p className="block text-center p-2">Mi Perfil</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row w-10/12 mx-auto my-2">
        <img className="w-16 mr-6" src={UserIcon} alt="" srcSet="" />
        <p className="my-auto text-2xl py-2">
          <span className="font-bold">Bienvenido: </span>Nombre de usuario
        </p>
      </div>
    </>
  );
};

export default HeaderUser;
