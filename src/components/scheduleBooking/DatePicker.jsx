import React, { useState, useEffect } from "react";

const DatePicker = (props) => {
  const { setNotEmty, date, setDate } = props;
  // const [date, setDate] = useState("");

  useEffect(() => {
    setNotEmty(false);
    if (date != "") {
      setNotEmty(true);
    }
  }, [date]);
  //   console.log(date, "date")

  return (
    <>
      <input
        className="bg-white text-black border-2 rounded-lg p-2 w-2/3 lg:w-1/2 mx-auto"
        type="date"
        id="start"
        name="trip-start"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
    </>
  );
};

export default DatePicker;
