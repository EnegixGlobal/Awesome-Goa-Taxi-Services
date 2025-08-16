import React from "react";
import AboutHero from "../sections/AboutHero.jsx";
import CompanyIntro from "../sections/CompanyIntro.jsx";

export default function About() {
  return (
    <main className="bg-white text-black">
      <AboutHero />
      <CompanyIntro />
    </main>
  );
}
