import React from "react";
import HeroSlider from "../components/HeroSlider.jsx";
import BookingSection from "../components/BookingSection.jsx";
import HighlightSection from "../components/HighlightSection.jsx";
import StatsSection from "../components/StatsSection.jsx";
import WhyChooseUs from "../components/WhyChooseUs.jsx";
import ChooseTaxiSection from "../components/ChooseTaxiSection.jsx";

export default function Home() {
  return (
    <main>
      <HeroSlider />
      <BookingSection />
      <HighlightSection />
      <StatsSection />
      <WhyChooseUs />
      <ChooseTaxiSection />
      {/* Placeholder sections */}
      <section id="about" className="max-w-5xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold mb-6">About Our Service</h2>
        <p className="text-white/70 leading-relaxed">
          Awesome Goa Taxi Services provides top‑notch rides across Goa with a
          focus on safety, punctuality and comfort. Our experienced drivers and
          well‑maintained vehicles ensure a pleasant journey every time.
        </p>
      </section>
    </main>
  );
}
