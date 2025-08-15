import React from "react";

const featuresTop = [
  {
    title: "Reliable & Punctual",
    desc: "Our drivers ensure timely pickups and drop- offs, so you never have to worry about delay.",
    icon: "fa-solid fa-route",
  },
  {
    title: "Safe & Secure Rides",
    desc: "Travel with confidence in our well- maintained vehicles driven by professional, verified drivers.",
    icon: "fa-solid fa-shield",
  },
  {
    title: "Affordable Pricing",
    desc: "Enjoy transparent fares with no hidden charges, giving you the best value for your money.",
    icon: "fa-solid fa-tags",
  },
];

const featuresBottom = [
  {
    title: "24/7 Availability",
    desc: "Need a ride at any hour? We're available around the clock to serve you.",
    icon: "fa-solid fa-clock",
  },
  {
    title: "Easy Booking",
    desc: "Simple online and phone bookings with instant confirmation for a hassle-free experience.",
    icon: "fa-solid fa-mobile-screen",
  },
  {
    title: "Free Quotation",
    desc: "Get a free quote for your travel before you book. No commitment, just clear and upfront pricing.",
    icon: "fa-solid fa-clipboard-check",
  },
];

function Feature({ icon, title, desc, withDivider }) {
  return (
    <div className="relative px-6 text-center flex flex-col items-center">
      {withDivider && (
        <span
          className="hidden md:block absolute top-0 bottom-0 left-0 w-px bg-white/10"
          aria-hidden="true"
        />
      )}
      <div className="w-16 h-16 rounded-full bg-brandYellow text-brandBlack grid place-items-center text-2xl mb-6 shadow-pill">
        <i className={icon} />
      </div>
      <h3 className="font-semibold mb-3 text-base tracking-wide">{title}</h3>
      <p className="text-[13px] leading-relaxed text-white/70 max-w-[230px]">
        {desc}
      </p>
    </div>
  );
}

export default function WhyChooseUs() {
  return (
    <section
      id="why"
      className="bg-brandBlack text-white h-screen min-h-[680px] flex items-center py-24"
    >
      <div className="max-w-6xl mx-auto w-full px-6">
        <div className="flex items-center gap-2 text-[11px] font-semibold tracking-wide mb-4 justify-center">
          <span className="w-2 h-2 rounded-full bg-brandYellow inline-block" />
          <span className="text-white/60">
            Reliable, Affordable & Safe – Your Trusted Taxi Service 24/7
          </span>
        </div>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-20 tracking-tight">
          Why choose us
        </h2>
        <div className="grid md:grid-cols-3 gap-14 mb-14">
          {featuresTop.map((f, idx) => (
            <Feature key={f.title} {...f} withDivider={idx !== 0} />
          ))}
        </div>
        <div className="grid md:grid-cols-3 gap-14">
          {featuresBottom.map((f, idx) => (
            <Feature key={f.title} {...f} withDivider={idx !== 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
