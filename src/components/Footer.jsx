import React from "react";

// Map visible label to anchor hash; only include real sections present on home page
const columnLinks = {
  useful: [
    { label: "Home", href: "#" },
    { label: "About", href: "/about" },
    { label: "Book A Ride", href: "/book" },
    { label: "Fleet", href: "#fleet" },
    { label: "Packages", href: "#packages" },
    { label: "Testimonials", href: "#testimonials" },
  ],
  support: [
    { label: "Why Choose Us", href: "#why" },
    { label: "Stats", href: "#stats" },
    { label: "FAQs", href: "#faqs" },
    { label: "Privacy Policy", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-brandBlack text-white pt-14 pb-8 mt-16 relative z-10">
      <div className="max-w-7xl mx-auto px-6 grid gap-8 md:grid-cols-4 lg:grid-cols-4">
        <div className="md:col-span-1 space-y-4 max-w-xs">
          <h3 className="font-semibold text-lg mb-1">About Us</h3>
          <p className="text-sm leading-relaxed text-white/80">
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
              
            </a>
            <a
              href="#"
              className="hover:text-brandYellow"
              aria-label="Instagram"
            >
              
            </a>
            <a href="#" className="hover:text-brandYellow" aria-label="Google">
              
            </a>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="font-semibold mb-2">Useful Links</h3>
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
        <div className="space-y-4">
          <h3 className="font-semibold mb-2">Support Links</h3>
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
        <div className="space-y-4">
          <h3 className="font-semibold mb-2">Contact Us</h3>
          <ul className="space-y-3 text-sm text-white/80">
            <li>
              Freates waddo Verla canca mapusa bardez north Goa Pincode:-
              Pincode 403510
            </li>
            <li className="flex items-center gap-2 text-brandYellow">
              <span>✉</span>
              <span className="text-white/90">Servicecab@gmail.com</span>
            </li>
            <li className="flex items-center gap-2 text-brandYellow">
              <span>☎</span>
              <span className="text-white/90">+91 90499 120096</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-white/10 px-6 flex flex-col md:flex-row justify-between gap-4 text-xs tracking-wide">
        <div>
          © 2025{" "}
          <span className="font-semibold text-brandYellow">
            AwesomeGoaTaxiServices.com
          </span>
        </div>
        <div className="flex gap-8">
          <a href="#" className="hover:text-brandYellow">
            Terms and conditions
          </a>
          <a href="#" className="hover:text-brandYellow">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
