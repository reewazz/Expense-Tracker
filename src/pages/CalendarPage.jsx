import * as React from 'react';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { useState } from 'react';
// import Calendar from 'react-calendar';
import { Sidebar } from '../modules/partials/Sidebar';
import './calendar.css'
import { Calendar } from '@mantine/dates';
import '@mantine/dates/styles.css';

export const CalendarPage = ()=> {

    const [date, setDate] = useState(new Date());

    const onChange = (newDate) => {
      setDate(newDate);
    };
  return (<>
    <Sidebar/>
    <div className="calendar-main">
        <div className="left">
        <Calendar/>
        </div>
        <div className="right">
       
  

        </div>
    </div>
    </>
  );
}