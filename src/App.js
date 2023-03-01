import React, { useState, useEffect } from "react";
import BankHolidayCalendar from "./component/BankHolidayCalendar";
import AddHolidayForm from "./component/AddHolidayForm";

const App = () => {
  const [bankHolidays, setBankHolidays] = useState([]);

  useEffect(() => {
    // Load the bank holidays list from local storage
    const storedHolidays = localStorage.getItem("bankHolidays");
    if (storedHolidays) {
      setBankHolidays(JSON.parse(storedHolidays));
    }
  }, []);

  const handleAddHoliday = (holiday) => {
    setBankHolidays([...bankHolidays, holiday]);

    // Persist the data in local storage
    localStorage.setItem("bankHolidays", JSON.stringify(bankHolidays));
  };

  return (
    <div>
      <AddHolidayForm onAddHoliday={handleAddHoliday} />
      <BankHolidayCalendar bankHolidays={bankHolidays} />
    </div>
  );
};

export default App;
