import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import OurTaxi from "./pages/OurTaxi.jsx";
import BookRide from "./pages/BookRide.jsx";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/taxi" element={<OurTaxi />} />
          <Route path="/book" element={<BookRide />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
