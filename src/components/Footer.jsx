import React from "react";

// Curated minimal link lists for clarity; using ids on home page with /# for cross-page navigation
const columnLinks = {
  useful: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Fleet", href: "/#fleet" },
    { label: "Packages", href: "/#packages" },
    { label: "Book A Ride", href: "/book" },
    { label: "Contact", href: "/contact" },
  ],
  support: [
    { label: "Why Choose Us", href: "/#why" },
    { label: "FAQs", href: "/#faqs" },
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-brandBlack text-white pt-10 pb-6 md:pt-14 md:pb-8 mt-16 relative z-10">
      <div className="max-w-7xl mx-auto px-6 grid gap-10 sm:gap-8 sm:grid-cols-2 md:grid-cols-4">
        {/* About */}
        <div className="space-y-5 max-w-sm sm:max-w-xs">
          <h3 className="font-semibold text-lg">About Us</h3>
          <p className="text-sm leading-relaxed text-white/80 tracking-wide">
            We are a reliable and professional taxi service dedicated to
            providing safe, comfortable, and affordable rides. Whether it's a
            daily commute, airport transfer, or long-distance journey, our
            experienced drivers ensure a smooth and hassle-free experience.
          </p>
          <div className="flex gap-4 text-base">
            <a
              href="#"
              className="hover:text-brandYellow"
              aria-label="Facebook"
            >
              <i className="fa-brands fa-facebook-f" />
            </a>
            <a
              href="#"
              className="hover:text-brandYellow"
              aria-label="Instagram"
            >
              <i className="fa-brands fa-instagram" />
            </a>
            <a
              href="#"
              className="hover:text-brandYellow"
              aria-label="WhatsApp"
            >
              <i className="fa-brands fa-whatsapp" />
            </a>
          </div>
        </div>
        {/* Useful Links */}
        <div className="space-y-4">
          <h3 className="font-semibold mb-1">Useful Links</h3>
          <ul className="space-y-2 text-sm">
            {columnLinks.useful.map((l) => (
              <li key={l.label}>
                <a className="hover:text-brandYellow" href={l.href}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* Support Links */}
        <div className="space-y-4">
          <h3 className="font-semibold mb-1">Support Links</h3>
          <ul className="space-y-2 text-sm">
            {columnLinks.support.map((l) => (
              <li key={l.label}>
                <a className="hover:text-brandYellow" href={l.href}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* Contact */}
        <div className="space-y-4">
          <h3 className="font-semibold mb-1">Contact Us</h3>
          <ul className="space-y-3 text-sm text-white/80">
            <li>
              Calangute Mapusa Fuldem Vaddo, Nagoa Arpora, Bardez - Goa PIN
              341001
            </li>
            <li className="flex items-center gap-2 text-brandYellow">
              <i className="fa-solid fa-envelope text-sm" aria-hidden="true" />
              <span className="text-white/90">servicecab@gmail.com</span>
            </li>
            <li className="flex items-center gap-2 text-brandYellow">
              <i className="fa-solid fa-phone text-sm" aria-hidden="true" />
              <span className="text-white/90">+91 90499 120096</span>
            </li>
          </ul>
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-8 md:mt-10 pt-5 md:pt-6 border-t border-white/10 px-6 flex flex-col md:flex-row justify-between items-center gap-2 md:gap-3 text-[11px] md:text-xs tracking-wide text-center md:text-left">
        <div className="text-white/70 order-2 md:order-1">
          © 2025{" "}
          <span className="font-semibold text-brandYellow">
            Awesome Goa Taxi Service
          </span>
        </div>
        <div className="text-white/60 order-1 md:order-2">
          Designed & developed by{" "}
          <a
            href="https://www.enegixwebsolutions.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-white hover:text-brandYellow"
          >
            Enegix Web Solutions
          </a>
        </div>
      </div>
    </footer>
  );
}
