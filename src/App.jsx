import React from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";

export default function App() {
  return (
    <div className="bg-brandBlack text-white min-h-screen flex flex-col">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}
