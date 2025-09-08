import React from "react";
import banner1 from "../../images/banner/1.jpg";
import banner2 from "../../images/banner/2.jpg";

/*
  Special Offers / Limited Time Offers section
  - Two prominent image banners
  - Subtle overlay gradient + content block
  - CTA to call now
  - Responsive: stacks on mobile, side-by-side on larger screens
*/
export default function SpecialOffersSection() {
  // Only image sources retained (text already baked into the images per user request)
  const offers = [
    { id: 1, image: banner1, alt: "Special offer banner 1" },
    { id: 2, image: banner2, alt: "Special offer banner 2" },
  ];

  return (
    <section
      className="bg-white py-20 sm:py-28 px-5 sm:px-6 lg:px-10 text-brandBlack"
      id="special-offers"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center gap-2 text-[11px] font-semibold tracking-wide text-brandBlack/70 mb-4">
          <span className="w-2 h-2 rounded-full bg-brandYellow inline-block" />
          <span>Exclusive Deals</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-center mb-14 sm:mb-20 leading-tight">
          <span className="block">Don’t Miss Out</span>
        </h2>

        <div className="grid gap-8 lg:gap-12 md:grid-cols-2">
          {offers.map((o) => (
            <div
              key={o.id}
              className="relative rounded-3xl overflow-hidden shadow-[0_6px_28px_-6px_rgba(0,0,0,0.25)] group bg-black/5"
            >
              <div className="w-full">
                <img
                  src={o.image}
                  alt={o.alt}
                  className="w-full h-auto object-contain block mx-auto"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <a
                href="tel:+919049661996"
                className="absolute inset-0 flex items-end justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity bg-black/0 group-hover:bg-black/10 focus-visible:opacity-100 focus-visible:bg-black/20 outline-none"
                aria-label="Call now about this special offer"
              >
                <span className="inline-flex items-center gap-2 rounded-full bg-brandYellow text-brandBlack text-[11px] font-semibold tracking-wide pl-4 pr-5 py-2 shadow-pill">
                  <i className="fa-solid fa-phone text-sm" aria-hidden="true" />
                  Call Now
                </span>
              </a>
            </div>
          ))}
        </div>

        {/* Removed descriptive paragraph to keep section minimal as per request */}
      </div>
    </section>
  );
}
