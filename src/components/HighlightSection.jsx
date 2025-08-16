import React from "react";
import imgMain from "../../images/third section/1.png";
import imgAlt from "../../images/third section/2.jpeg";

export default function HighlightSection() {
  return (
    <section
      className="bg-white text-brandBlack px-6 lg:px-10 py-16 sm:py-24"
      id="why-us"
    >
      <div className="max-w-7xl mx-auto">
        {/* Eyebrow */}
        <div className="flex items-center gap-2 text-[10px] sm:text-[11px] font-semibold tracking-wide text-brandBlack/80 mb-4 sm:mb-6">
          <span className="w-2 h-2 rounded-full bg-brandYellow inline-block" />
          <span>Welcome to Awesome Goa Taxi Service</span>
        </div>
        {/* Heading */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight max-w-4xl mb-10 sm:mb-14">
          Your first choice
          <br className="hidden sm:block" /> for traveling anywhere
        </h2>

        <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-start">
          {/* Left: Image */}
          <div className="rounded-md overflow-hidden shadow-lg aspect-[8/9] bg-gray-200 max-w-sm sm:max-w-none mx-auto sm:mx-0">
            <img
              src={imgMain}
              alt="Professional driver in taxi"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Right: Content cluster */}
          <div className="flex flex-col gap-12">
            {/* Top feature/media row */}
            <div className="grid sm:grid-cols-2 rounded-md overflow-hidden">
              <div className="bg-gray-100 p-6 sm:p-8 flex flex-col justify-center">
                <h3 className="text-base sm:text-lg font-semibold leading-snug mb-2 sm:mb-3">
                  We're specialized in providing a high quality service
                </h3>
                <p className="text-xs sm:text-sm text-brandBlack/60 leading-relaxed hidden md:block">
                  Reliable rides, comfortable vehicles, and courteous drivers
                  focused on your safety.
                </p>
              </div>
              <div className="relative h-44 sm:h-auto min-h-[200px] bg-black/10">
                <img
                  src={imgAlt}
                  alt="Taxi branding and service"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <button
                  type="button"
                  aria-label="Play video"
                  className="absolute inset-0 m-auto w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-brandYellow text-brandBlack text-xl sm:text-2xl grid place-items-center shadow-pill hover:scale-105 transition"
                >
                  <i className="fa-solid fa-play" />
                </button>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base leading-relaxed text-brandBlack/80">
              At Awesome Goa Taxi Service, we deliver dependable, comfortable
              and safe rides with friendly professional drivers and
              well‑maintained cars. Our customer-first approach keeps every
              journey smooth and stress‑free—daily commutes, airport pickups or
              long trips. Count on punctuality, transparent service and a
              reliable experience you can trust every time.
            </p>

            {/* Call to action */}
            <div className="pt-6 sm:pt-8 border-t border-brandBlack/10 flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-10">
              <div className="flex items-center gap-4 sm:gap-5">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-brandYellow text-brandBlack grid place-items-center text-lg sm:text-xl">
                  <i className="fa-solid fa-phone" />
                </div>
                <div className="text-xs sm:text-sm leading-tight">
                  <div className="font-semibold leading-snug">
                    Call us now and make your booking
                  </div>
                </div>
              </div>
              <a
                href="tel:+9190499120096"
                className="text-lg sm:text-xl font-extrabold tracking-wide hover:text-brandYellow transition"
              >
                +91 90499 120096
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
