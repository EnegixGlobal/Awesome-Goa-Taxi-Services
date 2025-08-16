import React from "react";
import driverImg from "../../images/aboutus/cheerful-driver-guy.jpg";

export default function CompanyIntro() {
  return (
    <section className="py-28 bg-white text-black" id="about-company">
      <div className="max-w-7xl mx-auto px-6 grid gap-24 lg:grid-cols-2 items-center">
        <div>
          <span className="inline-block w-2 h-2 rounded-full bg-brandYellow mb-8" />
          <p className="uppercase tracking-wide font-semibold text-sm mb-4 text-black/70">
            Few words about North goa taxi company
          </p>
          <h2 className="text-5xl md:text-6xl font-extrabold leading-tight mb-10">
            Learn about our <br /> taxi company
          </h2>
          <p className="text-[15px] md:text-[16px] leading-7 text-black/70">
            At North goa taxi service, we are dedicated to providing reliable,
            safe, and affordable transportation services. With a team of
            professional drivers and a fleet of well-maintained vehicles, we
            ensure a smooth and hassle-free travel experience for our customers.
            Whether you need a quick city ride, an airport transfer, or an
            outstation trip, we are here to serve you 24/7. Our commitment to
            punctuality, safety, and customer satisfaction makes us the
            preferred choice for all your travel needs. Book with us today and
            experience the difference!
          </p>
          <div className="mt-16">
            <a
              href="#contact"
              className="inline-block bg-brandYellow text-black font-semibold px-14 py-6 rounded-full text-lg shadow-pill hover:brightness-95 transition"
            >
              Discover More
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="rounded-3xl overflow-hidden aspect-[5/4] bg-black/5 ring-1 ring-black/10">
            <img
              src={driverImg}
              alt="Professional driver"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -top-10 -left-10 w-60 h-60 md:w-72 md:h-72 rounded-full bg-brandYellow text-black flex flex-col items-center justify-center font-extrabold text-3xl md:text-4xl shadow-xl">
            <span className="text-xs font-semibold tracking-wider mb-1 uppercase text-black/70">
              Trusted by
            </span>
            <span>1000+</span>
          </div>
        </div>
      </div>
    </section>
  );
}
