import React from "react";

export default function CallToActionBar() {
  return (
    <section
      className="bg-brandYellow text-brandBlack py-10 sm:py-12"
      id="cta-quote"
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <p className="uppercase tracking-wide text-[11px] font-semibold mb-2">
            Make a call or fill form
          </p>
          <h3 className="text-xl sm:text-2xl font-medium leading-snug">
            Call our agent to get a quote.
          </h3>
        </div>
        <div>
          <a
            href="tel:+919049661996"
            className="inline-block bg-brandBlack text-white font-semibold text-sm sm:text-base px-10 py-4 rounded-full shadow-pill hover:brightness-110 transition focus:outline-none focus:ring-2 focus:ring-brandBlack/40"
            aria-label="Call to book taxi"
          >
            Book Taxi Now
          </a>
        </div>
      </div>
    </section>
  );
}
