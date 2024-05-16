import * as React from "react";
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { useState, useEffect } from "react";
// import Calendar from 'react-calendar';
import { Sidebar } from "../modules/partials/Sidebar";
import "./calendar.css";
import { Calendar } from "@mantine/dates";
import "@mantine/dates/styles.css";
import { MainSchedule } from "../modules/scheduleTransactions/MainSchedule";

export const CalendarPage = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (newDate) => {
    setDate(newDate);
  };
  const [scheduledRows, setScheduledRows] = useState([]);
  useEffect(() => {
    const fetchScheduledTransactions = async () => {
      try {
        const response = await fetch(
          "http://localhost:8000/scheduled-transaction"
        );
        const result = await response.json();
        console.log("Fetched scheduled data:", result);

        if (Array.isArray(result.data)) {
          setScheduledRows(result.data);
        } else {
          console.error("Fetched scheduled data is not an array:", result.data);
          setScheduledRows([]);
        }
      } catch (error) {
        console.error("Error fetching scheduled data:", error);
        setScheduledRows([]);
      }
    };

    fetchScheduledTransactions();
  }, []);
  return (
    <>
      <Sidebar />
      <div className="calendar-main">
        <div className="left">
          <Calendar />
          <MainSchedule scheduledRows={scheduledRows} />
        </div>
        <div className="right"></div>
      </div>
    </>
  );
};
