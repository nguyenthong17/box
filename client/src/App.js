import "./App.css";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";

import NavTemplate from "./components/navbar/NavTemplate";
import Homepage from "./components/Homepage";

import AdminRoute from "./components/protectRoutes/AdminRoute";
import DriverRoute from "./components/protectRoutes/DriverRoute"
import CustomerRoute from './components/protectRoutes/CustomerRoute'
import UserRedirect from "./components/protectRoutes/UserRedirect";

import AdminLogIn from "./pages/admin/AdminLogin";
import CreateDriver from "./pages/admin/CreateDriver";
import AdminHomepage from "./pages/admin/AdminHomepage";

import DriverLogin from "./pages/driver/DriverLogin";
import DriverHomepage from '../src/pages/driver/DriverHomepage'

import CustomerSignup from "./pages/customer/CustomerSignup";
import CustomerHomepage from "./pages/customer/CustomerHomepage";
import CustomerLogin from "./pages/customer/CustomerLogin";

function App() {
  return (
    <div className="App">
      <NavTemplate />
      <Routes>
        <Route
          path="/"
          element={
            <UserRedirect>
              <Homepage />
            </UserRedirect>
          }
        />

        <Route path="/admin/login" element={<AdminLogIn />} />
        <Route
          path="/admin"
          element={
            <AdminRoute redirectTo={'/'}>
              <AdminHomepage />
            </AdminRoute>
          }
        />
        <Route
          path="/admin/driver/create"
          element={
            <AdminRoute redirectTo={"/"}>
              <CreateDriver />
            </AdminRoute>
          }
        />

        <Route path="/driver/login" element={<DriverLogin />} />
        <Route 
          path='/driver'
          element={
            <DriverRoute redirectTo={'/driver/login'}>
              <DriverHomepage/>
            </DriverRoute>
          }
        />

        <Route path='/customer/signup' element={<CustomerSignup />}/>
        <Route path='/customer/login' element={<CustomerLogin />}/>
        <Route 
          path='/customer' 
          element={
           <CustomerRoute redirectTo={'/customer/login'}>
             <CustomerHomepage />
           </CustomerRoute> 
          }
        />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
