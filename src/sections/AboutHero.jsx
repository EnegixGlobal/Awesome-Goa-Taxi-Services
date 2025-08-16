import React from "react";
import heroImg from "../../images/aboutus/heroimg.jpg";

export default function AboutHero() {
  return (
    <section className="relative h-[70vh] min-h-[420px] w-full flex items-center justify-center overflow-hidden">
      <img
        src={heroImg}
        alt="About our taxi service"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center mt-40 md:mt-48">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)] text-white">
          About Us
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-white/85 leading-relaxed max-w-2xl mx-auto drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
          Learn more about our commitment to safe, reliable and comfortable taxi
          services across Goa.
        </p>
      </div>
    </section>
  );
}
