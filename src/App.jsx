import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Home from "./pages/Hero/Home";
import Airdrop from "./pages/Airdrop";
import Profile from "./pages/Profile";
import P2P from "./pages/P2P";
import Footer from "./components/Footer";
import { Protected } from "./components/AuthLayout";
import Login from "./components/Login/Login";
import Register from "./components/Signup/SignUp";

function App() {
  return (
    <div className="appWrapper">
      <NavBar />

      <div className="contentWrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={
         <Protected authenication={false}>
          <Login/>
          </Protected>
          } />
          <Route path="/signup" element={
          <Protected authenication={false}>
            <Register/>
          </Protected>

          } />
          <Route path="/airdrop" element={<Airdrop />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/p2p" element={<P2P />} />
          {/* P2P Sell route */}
          <Route path="/p2p/sell" element={<P2P mode="sell" />} />

          {/* P2P Buy route */}
          <Route path="/p2p/buy" element={<P2P mode="buy" />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
