import { Route, Routes } from "react-router-dom"

import Header from "./components/Header"
import Footer from "./components/Footer"
import HomePage from "./pages/HomePage"
import Leaderboard from "./pages/Leaderboard"
import Report from "./pages/Report"
import Login from "./pages/Login"

function App() {

  return (
    <div className="bg-slate-100 min-h-screen font-inter">
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/report" element={<Report />} />
        <Route path="/login" element={<Login />} />
      </Routes >

      <Footer />
    </div >
  )
}

export default App
