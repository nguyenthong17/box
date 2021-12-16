import "./App.css";
import Footer from "./components/footer/Footer";
import { Routes, Route } from "react-router-dom";

import NavTemplate from "./components/navbar/NavTemplate";
import Homepage from "./components/Homepage";

import AdminRoute from "./components/protectRoutes/AdminRoute";
import DriverRoute from "./components/protectRoutes/DriverRoute";
import CustomerRoute from "./components/protectRoutes/CustomerRoute";
import UserRedirect from "./components/protectRoutes/UserRedirect";

import AdminLogIn from "./pages/admin/AdminLogin";
import CreateDriver from "./pages/admin/CreateDriver";
import AdminHomepage from "./pages/admin/AdminHomepage";
import AdminShowOrder from "./pages/admin/AdminShowOrder";

import DriverLogin from "./pages/driver/DriverLogin";
import DriverHomepage from "../src/pages/driver/DriverHomepage";

import CustomerSignup from "./pages/customer/CustomerSignup";
import CustomerHomepage from "./pages/customer/CustomerHomepage";
import CustomerLogin from "./pages/customer/CustomerLogin";
import AdminSignup from "./pages/admin/AdminSignup";
import CreateOrder from "./pages/customer/CreateOrder";
import EditOrder from "./pages/customer/EditOrder";
import ShowOrder from "./pages/customer/ShowOrder";

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

        <Route path="/secret" element={<AdminSignup />} />
        <Route
          path="/admin/login"
          element={
            <UserRedirect>
              <AdminLogIn />
            </UserRedirect>
          }
        />
        <Route
          path="/admin"
          element={
            <AdminRoute redirectTo={"/"}>
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
        <Route 
          path='/admin/orders'
          element={
            <AdminRoute redirectTo={"/"}>
              <AdminShowOrder />
            </AdminRoute>
          }
        /> 

        <Route
          path="/driver/login"
          element={
            <UserRedirect>
              <DriverLogin />
            </UserRedirect>
          }
        />
        <Route
          path="/driver"
          element={
            <DriverRoute redirectTo={"/"}>
              <DriverHomepage />
            </DriverRoute>
          }
        />

        <Route
          path="/customer"
          element={
            <CustomerRoute redirectTo={"/"}>
              <CustomerHomepage />
            </CustomerRoute>
          }
        />
        <Route
          path="/customer/signup"
          element={
            <UserRedirect>
              <CustomerSignup />
            </UserRedirect>
          }
        />
        <Route
          path="/customer/login"
          element={
            <UserRedirect>
              <CustomerLogin />
            </UserRedirect>
          }
        />
        <Route
          path="/customer/order/create"
          element={
            <CustomerRoute redirectTo={"/"}>
              <CreateOrder />
            </CustomerRoute>
          }
        />
        <Route
          path="/customer/order/:id"
          element={
            <CustomerRoute redirectTo={"/"}>
              <EditOrder />
            </CustomerRoute>
          }
        />
        <Route
          path="/customer/orders"
          element={
            <CustomerRoute redirectTo={"/"}>
              <ShowOrder />
            </CustomerRoute>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
