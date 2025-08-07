import React from "react";
import { Route, Routes } from "react-router-dom";
import Register from "../pages/auth/Register";
import Login from "../pages/auth/Login";
import Mentee from "../pages/profile/Mentee";
import Mentor from "../pages/profile/Mentor";
import Dashboard from "../pages/Dashboard";
import MatchResults from "../pages/MatchResults";
import Profile from "../pages/Profile";
import Chat from "../pages/Chat";
import Schedule from "../pages/Schedule";

const AppRoutes = () => {
    return (

        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/mentee/profile-setup" element={<Mentee />} />
          <Route path="/mentor/profile-setup" element={<Mentor />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/matches" element={<MatchResults />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/chat/:userId" element={<Chat />} />
          <Route path="/schedule/:userId" element={<Schedule />} />
        </Routes>
  
    );
}

export default AppRoutes;