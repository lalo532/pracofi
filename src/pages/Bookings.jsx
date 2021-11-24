import { useState, useEffect } from "react";
import { Booking } from "./";
import moment from "moment";
import { BookignsList, GeneratePDF } from "../components/bokings/";
import { HeaderUser } from "../components/global/";
import { getToken } from "../services/AutService";
import { useHistory } from "react-router-dom";
import { notPresentToken } from "../helpers";

const Bookings = () => {
  const history = useHistory();
  const [bookings, setBookings] = useState({});
  const [openModal, setOpenModal] = useState(true);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});
  const [loadingUser, setLoadingUser] = useState(true);

  let is_lawyer;
  moment.locale("es");
  let currentDate = moment().format();
  let newBookings = [];
  let oldBookings = [];

  function oldOrNewDate(bookings, currentD) {
    let date;
    bookings.map((element) => {
      date = moment(element.start).format();
      if (!moment(date).isSameOrAfter(currentD)) {
        oldBookings.push(element);
      } else {
        newBookings.push(element);
      }
    });
  }

  useEffect(() => {
    if (!getToken()) {
      notPresentToken();
      history.push("/login");
    }
  }, [getToken()]);

  return (
    <>
      <div className="w-full h-full">
        <HeaderUser />
        <GeneratePDF />
        <div className="flex flex-col w-10/12 m-auto">
          <div className="space-x-4 flex h-14 inline-block flex-row flex-row mb-7">
            <div className="flex-grow-0 mt-auto">
              <h3>Próximas citas</h3>
            </div>
            <div className="flex-grow h-0.5 bg-gray-300 mt-auto m-2"></div>
          </div>
          <BookignsList />
          <div className="space-x-4 flex h-14 inline-block flex-row mb-7">
            <div className="flex-grow-0 mt-auto">
              <h3>Citas pasadas</h3>
            </div>

            <div className="flex-grow h-0.5 bg-gray-300 mt-auto m-2"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bookings;
