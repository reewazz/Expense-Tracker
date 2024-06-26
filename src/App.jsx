import "./App.css";
// import { createTheme } from "@mantine/core";
// import { Sidebar } from "./modules/partials/Sidebar";
import "remixicon/fonts/remixicon.css";
import { Dashboard } from "./modules/accounts/Dashboard";
import { Transactions } from "./modules/transaction/Transactions";
import { Accountlist } from "./modules/accounts/Accountlist";
// import { Accountlist } from './modules/accounts/Accountlist'

import { Stats } from "./modules/stats/stats";
import { Navigate, Route, Routes } from "react-router";
// import TransactionTable from "./modules/accounts/TransactionTable";
import { Schedule } from "./modules/scheduleTransactions/Schedule";
// import { CalendarPage } from "./pages/CalendarPage";
import "react-calendar/dist/Calendar.css";
// import Login from "./pages/Login";
import { Signup } from "./modules/authentication/Signup";
import { Profile } from "./modules/profile/Profile";
import { UserSettings } from "./modules/profile/UserSettings";
import { Login } from "./pages/Login";
import { getToken } from "./store/modules/auth/actions";
import { useSelector } from "react-redux";
import { CalendarPage } from "./pages/CalendarPage";

// import { Button } from '@mantine/core'
// import '@mantine/core/styles.css';

function App() {
  // const [count, setCount] = useState(0)
  const token = useSelector((state) => state.authReducer.token) ?? getToken();
  return (
    <>
      <Routes>
        {/* <Route exact path="/" element={<Login />} /> */}
        <Route exact path="/" element={<Dashboard />} />
        {/* <Route
          path="/*"
          element={token ? <Transactions /> : <Navigate to="/transactions" />}
        /> */}
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/accountlist" element={<Accountlist />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/user-settings" element={<UserSettings />} />
      </Routes>
    </>
  );
}
export default App;
