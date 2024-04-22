import { Navigate, Route, Routes } from "react-router";
import { DashboardLayout } from "../layouts/Dashboard.layout";
import { AuthLayout } from "../layouts/Auth.layout";
import { getToken } from "../store/modules/auth/actions";
import { useSelector} from 'react-redux';

export const AppRoutes = ()=>{
     const token = useSelector(state=> state.authReducer.token) ?? getToken();
     return <Routes>
        <Route path='/*' element={token ? <DashboardLayout/> : <Navigate to="/auth" />} />
        <Route path='/auth/*' element={ !token ? <AuthLayout/> : <Navigate to="/" />} />
        <Route path='/*' element={
          <div>404 page not found</div>
          
        } />
        <Route exact path="/" component={Home} />
<Route path="/calendar" component={Calendar} />
<Route path="/pages" component={Pages} />
<Route path="/charts" component={Charts} />
<Route path="/time" component={Time} />
<Route path="/server" component={Server} />
      </Routes>
}