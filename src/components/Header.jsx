import React from "react";
import logo from "../../images/Website icon and favicon/icon.png";

const navItems = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Our Taxi", href: "#taxi" },
  { label: "Book A Ride", href: "#book" },
  { label: "Contact", href: "#contact" },
  { label: "Gallery", href: "#gallery" },
];

export default function Header() {
  return (
    <header className="w-full absolute top-0 left-0 z-30">
      {/* Top Utility Bar */}
      <div className="hidden md:grid grid-cols-3 items-center px-10 pt-4 text-sm">
        {/* Left: Email (swapped) */}
        <div className="flex items-center gap-2 text-brandYellow">
          <span className="text-lg" aria-hidden="true">
            <i className="fa-solid fa-envelope"></i>
          </span>
          <span className="font-medium text-white/90">
            ubedshaikh6089@gmail.com
          </span>
        </div>
        {/* Center: Only Logo */}
        <div className="flex justify-center items-center">
          <img src={logo} alt="Website logo" className="h-16 object-contain" />
        </div>
        {/* Right: Social icons (swapped) */}
        <div className="flex justify-end items-center gap-5 text-white/90">
          <a
            href="#"
            aria-label="Instagram"
            className="hover:text-brandYellow transition-colors text-lg"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a
            href="#"
            aria-label="Facebook"
            className="hover:text-brandYellow transition-colors text-lg"
          >
            <i className="fa-brands fa-facebook-f"></i>
          </a>
        </div>
      </div>
      {/* Navigation Bar */}
      <div className="flex justify-center mt-6">
        <div className="flex items-stretch bg-brandYellow rounded-full overflow-hidden shadow-pill max-w-6xl w-full md:w-auto">
          <nav className="flex px-14 py-6 gap-10 text-xs font-semibold tracking-[0.25em]">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="uppercase hover:text-black/70 text-black transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="bg-brandBlack text-white flex items-center gap-4 pr-10 pl-2 rounded-l-full">
            <div
              className="w-14 h-14 bg-brandYellow text-brandBlack rounded-full grid place-items-center text-2xl"
              aria-hidden="true"
            >
              <i className="fa-solid fa-phone"></i>
            </div>
            <div className="leading-tight text-sm">
              <div className="font-bold text-brandYellow text-base">
                +91 93221 19572
              </div>
              <div className="uppercase tracking-wider text-[11px]">
                Phone No.
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
