import "./Router.css";
import React from "react";
import { Home, About, ContactUs, Users } from "../index";
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";

import DevicesProvider from "../../../contextes/devicesContext";
import UsersProvider from "../../../contextes/Users-Context";

function Router() {
  return (
    <div id="div_main">
    <DevicesProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route
          path="Users"
          element={
            <UsersProvider>
              <Users />
            </UsersProvider>
          }
        />
        <Route path="ContactUs" element={<ContactUs />} />
      </Routes>
    </DevicesProvider>
    </div>
  );
}

export default Router;
