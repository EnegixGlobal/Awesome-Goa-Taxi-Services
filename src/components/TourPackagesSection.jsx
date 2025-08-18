import React from "react";
import { tourPackages } from "../data/packages";

function SpotItem({ spot }) {
  return (
    <li className="flex items-start gap-2 text-[11px] leading-relaxed tracking-wide font-semibold text-brandBlack/90">
      <i
        className={`fa-solid fa-${spot.icon} text-[10px] mt-0.5`}
        aria-hidden="true"
      />
      <span>{spot.label}</span>
    </li>
  );
}

function PackageCard({ pkg }) {
  return (
    <div className="rounded-2xl bg-brandYellow/95 text-brandBlack p-6 sm:p-8 lg:p-10 flex flex-col shadow-[0_4px_20px_-4px_rgba(0,0,0,0.15)] relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brandBlack/0 via-brandBlack/20 to-brandBlack/0" />
      <div className="flex flex-col items-center text-center mb-6 sm:mb-8">
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-black text-brandYellow grid place-items-center mb-3 sm:mb-4 shadow-inner">
          <i
            className="fa-solid fa-taxi text-xl sm:text-2xl"
            aria-hidden="true"
          />
        </div>
        <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-[1px] leading-snug max-w-[240px]">
          {pkg.title}
        </h3>
        <p className="text-[9px] sm:text-[10px] font-medium mt-2 sm:mt-3 tracking-wide">
          {pkg.timing}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-x-4 sm:gap-x-8 gap-y-3 mb-6 sm:mb-8 border-y border-black/15 py-4 sm:py-6 text-[10px] sm:text-[11px]">
        {pkg.spots.map((s) => (
          <SpotItem key={s.label} spot={s} />
        ))}
      </div>

      <div className="flex flex-col gap-4 sm:gap-5 text-[10px] sm:text-[11px] font-semibold tracking-wider mb-6 sm:mb-8">
        <div className="flex items-center justify-between gap-2">
          <span className="uppercase">{pkg.carType}</span>
          <span className="uppercase">: {pkg.vehicle}</span>
        </div>
        <div className="flex items-center justify-between gap-2">
          <span className="uppercase">
            {pkg.title.split(" ")[0]} Tour Package
          </span>
          <span className="uppercase">
            @ {pkg.currency} {pkg.price.toLocaleString()}
          </span>
        </div>
      </div>

      <div className="mt-auto">
        <a
          href="tel:+919049661996"
          aria-label={`Call to order taxi for ${pkg.title}`}
          className="block text-center w-full rounded-full bg-brandBlack hover:bg-black text-white text-[11px] font-semibold tracking-wide py-4 transition-colors focus:outline-none focus:ring-2 focus:ring-brandBlack/40"
        >
          Order Taxi Now
        </a>
      </div>
    </div>
  );
}

export default function TourPackagesSection() {
  return (
    <section
      id="packages"
      className="bg-white py-20 sm:py-28 px-5 sm:px-6 lg:px-10 text-brandBlack"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center gap-2 text-[11px] font-semibold tracking-wide text-brandBlack/70 mb-4">
          <span className="w-2 h-2 rounded-full bg-brandYellow inline-block" />
          <span>Our tour packages</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-center mb-14 sm:mb-20">
          Checkout Our Tour Packages
        </h2>

        <div className="grid gap-6 sm:gap-10 md:grid-cols-2">
          {tourPackages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>

        <p className="mt-14 sm:mt-20 text-center text-[9px] sm:text-[10px] leading-relaxed tracking-wide text-brandBlack/70 max-w-5xl mx-auto">
          Explore the best destinations with our exclusive tour packages!
          Whether you're looking for a scenic road trip, an adventurous getaway,
          or a relaxing vacation, we've got you covered. Our taxi services
          ensure a comfortable and hassle‑free travel experience with
          professional drivers and well‑maintained vehicles.
        </p>
      </div>
    </section>
  );
}
