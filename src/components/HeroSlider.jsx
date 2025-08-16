import React, { useState, useEffect } from "react";
import slide1 from "../../images/hero slider images/1.jpg";
import slide2 from "../../images/hero slider images/2.jpg";
import slide3 from "../../images/hero slider images/3.png";
import slide4 from "../../images/hero slider images/4.png";
import slide5 from "../../images/hero slider images/5.png";

const slides = [
  {
    id: 1,
    title: "Cheap & Trusted Taxi Company",
    subtitle: "Enjoy your comfortable trip with Awesome Goa Taxi Service",
    image: slide1,
  },
  {
    id: 2,
    title: "Reliable Airport Transfers",
    subtitle: "On time, every time—stress-free travel to and from the airport",
    image: slide2,
  },
  {
    id: 3,
    title: "Explore Goa Comfortably",
    subtitle: "Safe, clean, and affordable rides across scenic destinations",
    image: slide3,
  },
  {
    id: 4,
    title: "Professional Drivers",
    subtitle:
      "Experienced, courteous, and dedicated to your safety and comfort",
    image: slide4,
  },
  {
    id: 5,
    title: "Book Your Ride Easily",
    subtitle: "Fast booking and transparent pricing for every journey",
    image: slide5,
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
    <section className="relative h-screen min-h-[560px] w-full overflow-hidden flex items-center justify-center border-b border-white/20">
      {slides.map((s, i) => (
        <div
          key={s.id}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={s.image}
            alt="Slide"
            className="w-full h-full object-cover"
          />
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
          <a
            href="#about"
            className="inline-block bg-brandYellow text-black font-semibold px-10 py-4 sm:px-12 sm:py-5 rounded-full text-base sm:text-lg shadow-pill hover:brightness-95 transition"
          >
            Learn More
          </a>
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
