import React from "react";
import PageHero from "../sections/PageHero.jsx";
import { vehicles } from "../data/vehicles.js";

export default function Gallery() {
  return (
    <main className="bg-white text-brandBlack">
      <PageHero
        title="Gallery"
        subtitle="A quick look at our well-maintained fleet ready to serve you."
      />
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex items-center justify-center gap-2 text-[11px] font-semibold tracking-wide text-brandBlack/70 mb-5">
          <span className="w-2 h-2 rounded-full bg-brandYellow inline-block" />
          <span>Fleet Gallery</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-center mb-14">
          Explore Our Vehicles
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {vehicles.map((v) => (
            <figure
              key={v.id}
              className="rounded-3xl overflow-hidden bg-white border border-black/5 shadow-sm hover:shadow-lg transition duration-300 group flex flex-col"
            >
              <div className="w-full h-48 sm:h-56 md:h-64 flex items-center justify-center bg-[#f5f5f5]">
                <img
                  src={v.image}
                  alt={v.name}
                  className="max-w-full max-h-full object-contain group-hover:scale-[1.03] transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <figcaption className="p-3 text-center text-xs sm:text-sm font-semibold text-brandBlack/80">
                {v.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </main>
  );
}
