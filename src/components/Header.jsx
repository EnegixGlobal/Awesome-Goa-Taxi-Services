import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../images/Website icon and favicon/icon.png";

// Top-level nav; internal section hashes only valid on home page
const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Our Taxi", to: "/taxi" },
  { label: "Book A Ride", to: "/book" },
  { label: "Contact", to: "/contact" },
  { label: "Gallery", to: "/gallery" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === "/";

  const renderNavLink = (item) => {
    if (item.to) {
      return (
        <Link
          key={item.label}
          to={item.to}
          onClick={() => setOpen(false)}
          className="uppercase hover:text-black/70 text-black transition-colors flex items-center h-full leading-none"
        >
          {item.label}
        </Link>
      );
    }
    const disabled = !isHome; // hashes only scroll on home page
    return (
      <a
        key={item.label}
        href={disabled ? "/#" + item.hash?.replace("#", "") : item.hash}
        onClick={() => setOpen(false)}
        className={`uppercase ${
          disabled ? "opacity-50 cursor-not-allowed" : "hover:text-black/70"
        } text-black transition-colors flex items-center h-full leading-none`}
        aria-disabled={disabled}
      >
        {item.label}
      </a>
    );
  };
  return (
    <header className="w-full absolute top-0 left-0 z-30">
      {/* Desktop Utility Bar */}
      <div className="hidden md:grid grid-cols-3 items-center px-10 pt-4 text-sm">
        <div className="flex items-center gap-2 text-brandYellow">
          <span className="text-lg" aria-hidden="true">
            <i className="fa-solid fa-envelope"></i>
          </span>
          <span className="font-medium text-white/90">
            servicecab@gmail.com
          </span>
        </div>
        <div className="flex justify-center items-center">
          <img src={logo} alt="Website logo" className="h-16 object-contain" />
        </div>
        <div className="flex justify-end items-center gap-5 text-white/90">
          <a
            href="#"
            aria-label="Instagram"
            className="hover:text-brandYellow transition-colors text-lg"
          >
            <i className="fa-brands fa-instagram" />
          </a>
          <a
            href="#"
            aria-label="Facebook"
            className="hover:text-brandYellow transition-colors text-lg"
          >
            <i className="fa-brands fa-facebook-f" />
          </a>
        </div>
      </div>
      {/* Mobile Bar */}
      <div className="md:hidden flex items-center justify-between px-5 pt-4">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Logo" className="h-12 w-12 object-contain" />
          <span className="text-lg font-bold tracking-wide">
            <span className="text-brandYellow">Goa</span> Taxi
          </span>
        </div>
        <button
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle navigation"
          className="w-12 h-12 rounded-full bg-brandYellow text-black grid place-items-center text-2xl shadow-pill focus:outline-none focus:ring-2 focus:ring-white/40"
        >
          {open ? (
            <i className="fa-solid fa-xmark" />
          ) : (
            <i className="fa-solid fa-bars" />
          )}
        </button>
      </div>
      {open && (
        <div className="md:hidden px-5 mt-4">
          <nav className="bg-brandYellow rounded-3xl p-6 space-y-4 shadow-pill">
            {navItems.map((item) =>
              item.to ? (
                <Link
                  key={item.label}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="block uppercase tracking-[0.25em] text-sm font-semibold text-black/90 hover:text-black"
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.hash}
                  onClick={() => setOpen(false)}
                  className={`block uppercase tracking-[0.25em] text-sm font-semibold text-black/90 ${
                    !isHome
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:text-black"
                  }`}
                  aria-disabled={!isHome}
                >
                  {item.label}
                </a>
              )
            )}
            <a
              href="tel:+9190499120096"
              className="flex items-center gap-4 bg-brandBlack text-white rounded-2xl px-5 py-4"
            >
              <span
                className="w-12 h-12 rounded-full bg-brandYellow text-brandBlack grid place-items-center text-xl"
                aria-hidden="true"
              >
                <i className="fa-solid fa-phone" />
              </span>
              <span className="text-left leading-tight">
                <span className="block font-bold text-brandYellow text-base">
                  +91 90499 120096
                </span>
                <span className="block text-[11px] uppercase tracking-wider">
                  Phone No.
                </span>
              </span>
            </a>
          </nav>
        </div>
      )}
      {/* Desktop Navigation Bar */}
      <div className="hidden md:flex justify-center mt-6">
        <div className="flex items-stretch bg-brandYellow rounded-full overflow-hidden shadow-pill max-w-7xl w-full md:w-auto h-[92px]">
          <nav className="hidden md:flex items-center h-full px-16 gap-12 text-sm font-semibold tracking-[0.25em]">
            {navItems.map(renderNavLink)}
          </nav>
          <div className="bg-brandBlack text-white flex items-center gap-5 pr-12 pl-3 rounded-l-full h-full">
            <div
              className="w-16 h-16 bg-brandYellow text-brandBlack rounded-full grid place-items-center text-3xl"
              aria-hidden="true"
            >
              <i className="fa-solid fa-phone" />
            </div>
            <div className="leading-tight text-[15px]">
              <div className="font-bold text-brandYellow text-[17px]">
                +91 90499 120096
              </div>
              <div className="uppercase tracking-wider text-[12px]">
                Phone No.
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
