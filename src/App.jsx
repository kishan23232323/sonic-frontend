import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar/Navbar";

import Home from "./pages/Home";
import Airdrop from "./pages/Airdrop";
import Profile from "./pages/Profile";

import P2PCard from "./components/P2PCard";

function App() {
  const location = useLocation();
  const isP2P = location.pathname === "/p2p";

  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/airdrop" element={<Airdrop />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/p2p" element={null} />
      </Routes>

      {isP2P && <P2PCard />}
    </>
  );
}

export default App;
