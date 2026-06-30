import { Route, Routes } from "react-router-dom"

import Header from "./components/Header"
import Footer from "./components/Footer"
import HomePage from "./pages/HomePage"
import Leaderboard from "./pages/Leaderboard"
import Report from "./pages/Report"
import Login from "./pages/Login"
import Profile from "./pages/Profile"
import Register from "./pages/Register"
import ForgotPassword from "./pages/ForgotPassword"
import ProfileActivity from "./pages/ProfileActivity"
import Settings from "./pages/Settings"

function App() {

  return (
    <div className="bg-slate-100 min-h-screen font-inter">
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/report" element={<Report />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/profile/activity" element={<ProfileActivity />} />
        <Route path="/settings" element={<Settings />} />
      </Routes >

      <Footer />
    </div >
  )
}

export default App
