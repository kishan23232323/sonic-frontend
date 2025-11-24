import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import NavBar from "./components/Navbar";
import Home from "./pages/Hero/Home";
import Airdrop from "./pages/Airdrop";
import Profile from "./pages/Profile";
import P2PCard from "./components/P2PCard";
import Footer from "./components/Footer";

function App() {
  const location = useLocation();
  const isP2P = location.pathname === "/p2p";

  // Get the background location (the page before /p2p was opened)
  const backgroundLocation = location.state?.backgroundLocation;

  return (
    <div className="appWrapper">
      <NavBar />

      <div className="contentWrapper">
        <Routes location={backgroundLocation || location}>
          <Route path="/" element={<Home />} />
          <Route path="/airdrop" element={<Airdrop />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>

      {isP2P && <P2PCard />}

      <Footer />
    </div>
  );
}

export default App;
