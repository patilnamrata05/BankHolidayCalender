import React, { useState } from "react";
import Calendar from "react-calendar";

const BankHolidayCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [bankHolidays, setBankHolidays] = useState([]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleAddHoliday = () => {
    // Add the selected date to the bank holidays list
    const newHoliday = {
      date: selectedDate,
      name: prompt("Enter holiday name"),
    };
    setBankHolidays([...bankHolidays, newHoliday]);

    // Persist the data in local storage
    localStorage.setItem("bankHolidays", JSON.stringify(bankHolidays));
  };

  return (
    <div className="container">
      <Calendar value={selectedDate} onChange={handleDateChange} />
      <p></p>
      <button onClick={handleAddHoliday} className="addholiday btn btn-primary">
        Add holiday
      </button>
      {bankHolidays.map((holiday) => (
        <div key={holiday.date}>
          {holiday.date.toDateString()} - {holiday.name}
        </div>
      ))}
    </div>
  );
};

export default BankHolidayCalendar;
