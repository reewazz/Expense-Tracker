import { Navigate, Route, Routes } from "react-router";
import { DashboardLayout } from "../layouts/Dashboard.layout";
import { AuthLayout } from "../layouts/Auth.layout";
import { getToken } from "../store/modules/auth/actions";
import { useSelector } from "react-redux";
import { Transactions } from "../modules/transaction/Transactions";
import { Signup } from "../modules/authentication/Signup";
import { Stats } from "../modules/stats/stats";
import { Schedule } from "@mui/icons-material";
import { Profile } from "../modules/profile/Profile";
import { UserSettings } from "../modules/profile/UserSettings";
import { Accountlist } from "../modules/accounts/Accountlist";

export const AppRoutes = () => {
  const token = useSelector((state) => state.authReducer.token) ?? getToken();
  return (
    <Routes>
      <Route
        path="/*"
        element={token ? <DashboardLayout /> : <Navigate to="/auth" />}
      />
      <Route
        path="/auth/*"
        element={!token ? <AuthLayout /> : <Navigate to="/" />}
      />
      <Route path="/*" element={<div>404 page not found</div>} />
      <Route exact path="/" element={<Dashboard />} />
      {/* <Route
          path="/*"
          element={token ? <Transactions /> : <Navigate to="/transactions" />}
        /> */}
      <Route path="/transactions" element={<Transactions />} />
      <Route path="/calendar" element={<Signup />} />
      <Route path="/stats" element={<Stats />} />
      <Route path="/accountlist" element={<Accountlist />} />
      <Route path="/schedule" element={<Schedule />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/user-settings" element={<UserSettings />} />
    </Routes>
  );
};
