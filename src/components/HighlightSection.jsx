import React from "react";
import imgMain from "../../images/third section/1.png";

export default function HighlightSection() {
  return (
    <section
      className="bg-white text-brandBlack px-6 lg:px-10 py-24"
      id="why-us"
    >
      <div className="max-w-7xl mx-auto">
        {/* Eyebrow */}
        <div className="flex items-center gap-2 text-[11px] font-semibold tracking-wide text-brandBlack/80 mb-6">
          <span className="w-2 h-2 rounded-full bg-brandYellow inline-block" />
          <span>Welcome to NorthGoaTaxiService</span>
        </div>
        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight max-w-4xl mb-14">
          Your first choice
          <br className="hidden sm:block" /> for traveling anywhere
        </h2>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Image */}
          <div className="rounded-md overflow-hidden shadow-lg aspect-[4/5] bg-gray-200">
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
              <div className="bg-gray-100 p-8 flex flex-col justify-center">
                <h3 className="text-lg font-semibold leading-snug mb-3">
                  We're specialized in providing a high quality service
                </h3>
                <p className="text-sm text-brandBlack/60 leading-relaxed hidden md:block">
                  Reliable rides, comfortable vehicles, and courteous drivers
                  focused on your safety.
                </p>
              </div>
              <div className="relative h-56 sm:h-auto min-h-[220px] bg-black/10">
                <img
                  src={imgMain}
                  alt="Taxi service highlight"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <button
                  type="button"
                  aria-label="Play video"
                  className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-brandYellow text-brandBlack text-2xl grid place-items-center shadow-pill hover:scale-105 transition"
                >
                  <i className="fa-solid fa-play" />
                </button>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base leading-relaxed text-brandBlack/80">
              At Northgoataxiservice, we are committed to delivering a
              high-quality taxi service that prioritizes comfort, safety, and
              reliability. With professional drivers, well-maintained vehicles,
              and a customer-first approach, we ensure a smooth and stress-free
              journey every time. Whether it's a daily commute, airport
              transfer, or long-distance travel, our service is designed to meet
              your needs with punctuality and efficiency. Experience the
              difference with a taxi service you can trust.
            </p>

            {/* Call to action */}
            <div className="pt-8 border-t border-brandBlack/10 flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-full bg-brandYellow text-brandBlack grid place-items-center text-xl">
                  <i className="fa-solid fa-phone" />
                </div>
                <div className="text-sm leading-tight">
                  <div className="font-semibold">
                    Call us now and make your booking
                  </div>
                </div>
              </div>
              <a
                href="tel:+919322119572"
                className="text-xl font-extrabold tracking-wide hover:text-brandYellow transition"
              >
                +91 93221 19572
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
