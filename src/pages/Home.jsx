import React from "react";
import HeroSlider from "../components/HeroSlider.jsx";
import BookingSection from "../components/BookingSection.jsx";
import HighlightSection from "../components/HighlightSection.jsx";
import StatsSection from "../components/StatsSection.jsx";
import WhyChooseUs from "../components/WhyChooseUs.jsx";
import ChooseTaxiSection from "../components/ChooseTaxiSection.jsx";
import TourPackagesSection from "../components/TourPackagesSection.jsx";
import TestimonialsSection from "../components/TestimonialsSection.jsx";
import FAQsSection from "../components/FAQsSection.jsx";
import SpecialOffersSection from "../components/SpecialOffersSection.jsx";

export default function Home() {
  return (
    <main className="bg-brandBlack text-white">
      <HeroSlider />
      <BookingSection />
      <HighlightSection />
      <StatsSection />
      <WhyChooseUs />
      <ChooseTaxiSection />
      <TestimonialsSection />
      <TourPackagesSection />
      <FAQsSection />
      <SpecialOffersSection />
    </main>
  );
}
