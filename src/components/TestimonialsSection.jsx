import React, { useState, useEffect, useCallback } from "react";
import { testimonials, testimonialsBackground } from "../data/testimonials";

// Simple auto slider (no external lib) with pause on hover and keyboard navigation
export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const duration = 6500; // ms

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % testimonials.length);
  }, []);
  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const id = setTimeout(next, duration);
    return () => clearTimeout(id);
  }, [index, next]);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  const active = testimonials[index];

  return (
    <section id="testimonials" className="relative text-white">
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,.65),rgba(0,0,0,.65)), url(${testimonialsBackground})`,
        }}
        aria-hidden="true"
      />
      <div className="max-w-6xl mx-auto px-6 py-24 lg:py-36">
        <div className="flex items-center justify-center gap-2 text-[11px] font-semibold tracking-wide mb-5">
          <span className="w-2 h-2 rounded-full bg-brandYellow inline-block" />
          <span>Client Testimonials</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-center tracking-tight mb-12 sm:mb-16">
          What They Say About Us
        </h2>
        {/* Avatars */}
        <div className="flex items-center justify-center gap-4 mb-10">
          {testimonials.map((t, i) => (
            <button
              key={t.id}
              onClick={() => setIndex(i)}
              className={`relative w-14 h-14 sm:w-16 sm:h-16 rounded-full ring-2 transition-all overflow-hidden ${
                i === index
                  ? "ring-brandYellow scale-110"
                  : "ring-white/20 hover:ring-brandYellow/60"
              }`}
              aria-label={`Show testimonial from ${t.name}`}
            >
              <img
                src={t.avatar}
                alt={t.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </button>
          ))}
        </div>
        {/* Quote */}
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg sm:text-2xl font-semibold leading-relaxed sm:leading-snug mb-8">
            {active.text}
          </p>
          <div className="text-xl sm:text-2xl font-semibold text-brandYellow">
            {active.name}
          </div>
          <div className="text-xs sm:text-sm mt-1 text-white/70 font-medium tracking-wide uppercase">
            {active.role}
          </div>
        </div>
        {/* Dots */}
        <div className="flex items-center justify-center gap-3 mt-12">
          {testimonials.map((t, i) => (
            <button
              key={t.id}
              onClick={() => setIndex(i)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                i === index ? "bg-brandYellow" : "bg-white/30 hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
        {/* Nav Arrows */}
        <button
          type="button"
          onClick={prev}
          className="hidden sm:flex absolute left-8 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full border border-white/70 hover:border-brandYellow/80 items-center justify-center text-2xl"
          aria-label="Previous testimonial"
        >
          <i className="fa-solid fa-arrow-left" />
        </button>
        <button
          type="button"
          onClick={next}
          className="hidden sm:flex absolute right-8 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full border border-white/70 hover:border-brandYellow/80 items-center justify-center text-2xl"
          aria-label="Next testimonial"
        >
          <i className="fa-solid fa-arrow-right" />
        </button>
      </div>
    </section>
  );
}
