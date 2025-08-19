import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// Desktop slides
import slide1 from "../../images/hero slider images/1.jpg";
import slide2 from "../../images/hero slider images/2.jpg";
import slide3 from "../../images/hero slider images/3.png";
import slide4 from "../../images/hero slider images/4.png";
import slide5 from "../../images/hero slider images/5.png";
// Mobile-optimized slides (same ordering)
import mslide1 from "../../images/mob-slider-images/1.jpg";
import mslide2 from "../../images/mob-slider-images/2.jpg";
import mslide3 from "../../images/mob-slider-images/3.jpg";
import mslide4 from "../../images/mob-slider-images/4.jpg";
import mslide5 from "../../images/mob-slider-images/5.jpg";

const slides = [
  {
    id: 1,
    title: "Trusted Goa Taxi Service (Estd. 2012)",
    subtitle:
      "Trusted by 10,000+ customers • Certified & verified drivers for every ride",
    image: slide1,
    mobile: mslide1,
  },
  {
    id: 2,
    title: "Affordable & Cost‑Effective Rides",
    subtitle:
      "Best value for money with transparent fares & lowest price guarantee",
    image: slide2,
    mobile: mslide2,
  },
  {
    id: 3,
    title: "Premium Quality Guaranteed",
    subtitle:
      "Clean, well‑maintained fleet • Quality at the right price every time",
    image: slide3,
    mobile: mslide3,
  },
  {
    id: 4,
    title: "Certified & Professional Drivers",
    subtitle:
      "Experienced, polite & verified – on‑time airport & outstation transfers since 2012",
    image: slide4,
    mobile: mslide4,
  },
  {
    id: 5,
    title: "Book Fast – Value & Trust Combined",
    subtitle:
      "24/7 support • Smart & cost‑effective booking • Safe, reliable & affordable",
    image: slide5,
    mobile: mslide5,
  },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % slides.length),
      6000
    );
    return () => clearInterval(id);
  }, []);

  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setIndex((i) => (i + 1) % slides.length);

  return (
    // Mobile height reduced ~30% (70vh) while keeping full height from sm breakpoint upwards
    <section className="relative h-[70vh] sm:h-screen min-h-[400px] sm:min-h-[560px] w-full overflow-hidden flex items-center justify-center border-b border-white/20">
      {slides.map((s, i) => (
        <div
          key={s.id}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <picture>
            {/* Serve mobile-optimized image for small screens */}
            <source media="(max-width: 640px)" srcSet={s.mobile || s.image} />
            <img
              src={s.image}
              alt={s.title}
              className="w-full h-full object-cover"
              loading="eager"
            />
          </picture>
          <div className="absolute inset-0 bg-black/60" />
        </div>
      ))}
      <div className="relative z-10 max-w-4xl text-center px-4 sm:px-6 mt-28 sm:mt-32">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6 sm:mb-8">
          {slides[index].title}
        </h1>
        <p className="text-base sm:text-lg md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
          {slides[index].subtitle}
        </p>
        <div className="mt-8 sm:mt-10">
          <Link
            to="/book"
            className="inline-block bg-brandYellow text-black font-semibold px-10 py-4 sm:px-12 sm:py-5 rounded-full text-base sm:text-lg shadow-pill hover:brightness-95 transition focus:outline-none focus:ring-2 focus:ring-brandYellow/60"
          >
            Book Now
          </Link>
        </div>
      </div>
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="hidden sm:grid absolute left-6 md:left-16 top-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-white text-white text-xl md:text-2xl place-items-center hover:bg-white hover:text-black transition"
      >
        ←
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="hidden sm:grid absolute right-6 md:right-16 top-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-white text-white text-xl md:text-2xl place-items-center hover:bg-white hover:text-black transition"
      >
        →
      </button>
    </section>
  );
}
