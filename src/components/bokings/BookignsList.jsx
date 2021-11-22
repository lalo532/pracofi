import { useState } from "react";
import { Booking } from "./";
import moment from "moment";

const BookignsList = () => {
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

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Booking algo={"asdasd"} />
        <Booking algo={"asdasdadasd"} />
        <Booking algo={"asdasd"} />
        <Booking algo={"asdasd"} />
        <Booking algo={"asdasdasdasd"} />
        <Booking algo={"asdasd"} />
        <Booking algo={"asdasd"} />
        <Booking algo={"asdasd"} />
        <Booking algo={"asdasdasdas"} />
        <Booking algo={"asdasd"} />
        <Booking algo={"asdasd"} />
        <Booking algo={"asdasdadas"} />
        <Booking algo={"asdasdasdssssssssssssaaaaaaaaaaaaaa"} />
        <Booking algo={"asdasdasdas"} />
        <Booking algo={"asdasd"} />
      </div>
    </>
  );
};

export default BookignsList;
