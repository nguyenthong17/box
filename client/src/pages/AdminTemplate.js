import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminLogIn from "./admin/AdminLogIn";

export default function AdminTemplate() {
  return (
    <>
    {/* TODO: add admin navbar */}
      {/* <AdminNavBar /> */}

      <Routes>
        <Route path='/admin/login' element={<AdminLogIn />}/>
      </Routes>
    </>
  );
}
