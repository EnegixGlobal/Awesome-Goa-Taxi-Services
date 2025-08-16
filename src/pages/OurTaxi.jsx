import React from "react";
import PageHero from "../sections/PageHero.jsx";
import ChooseTaxiSection from "../components/ChooseTaxiSection.jsx";
import WhyChooseUs from "../components/WhyChooseUs.jsx";
import FAQsSection from "../components/FAQsSection.jsx";

export default function OurTaxi() {
  return (
    <main className="bg-white text-brandBlack">
      <PageHero
        title="Our Taxi"
        subtitle="Browse our well-maintained fleet and choose the perfect ride for your journey."
      />
      <ChooseTaxiSection />
      <div className="bg-brandBlack text-white">
        <WhyChooseUs />
      </div>
      <FAQsSection />
    </main>
  );
}
