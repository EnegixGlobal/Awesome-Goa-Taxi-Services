import React from "react";
import AboutHero from "../sections/AboutHero.jsx";
import CompanyIntro from "../sections/CompanyIntro.jsx";
import WhyChooseUs from "../components/WhyChooseUs.jsx";
import ChooseTaxiSection from "../components/ChooseTaxiSection.jsx";

export default function About() {
  return (
    <main className="bg-white text-black">
      <AboutHero />
      <CompanyIntro />
      <div className="bg-brandBlack text-white">
        <WhyChooseUs />
      </div>
      <ChooseTaxiSection />
    </main>
  );
}
