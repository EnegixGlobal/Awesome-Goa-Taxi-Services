import React from "react";

const columnLinks = {
  useful: ["Home", "About", "Our Taxi", "Book A Ride", "Gallery", "Contact"],
  support: ["About", "Contact", "Terms and conditions", "Privacy Policy"],
};

export default function Footer() {
  return (
    <footer className="bg-brandBlack text-white pt-20 pb-10 mt-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6 grid gap-12 md:grid-cols-4 lg:grid-cols-4">
        <div className="md:col-span-1 space-y-6 max-w-xs">
          <h3 className="font-semibold text-lg">About Us</h3>
          <p className="text-sm leading-relaxed text-white/80">
            We are a reliable and professional taxi service dedicated to
            providing safe, comfortable, and affordable rides. Whether it's a
            daily commute, airport transfer, or long-distance journey, our
            experienced drivers ensure a smooth and hassle-free experience.
          </p>
          <div className="flex gap-6 text-lg">
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
        <div>
          <h3 className="font-semibold mb-6">Useful Links</h3>
          <ul className="space-y-3 text-sm">
            {columnLinks.useful.map((l) => (
              <li key={l}>
                <a className="hover:text-brandYellow" href="#">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-6">Support Links</h3>
          <ul className="space-y-3 text-sm">
            {columnLinks.support.map((l) => (
              <li key={l}>
                <a className="hover:text-brandYellow" href="#">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-6">Contact Us</h3>
          <ul className="space-y-4 text-sm text-white/80">
            <li>
              Freates waddo Verla canca mapusa bardez north Goa Pincode:-
              Pincode 403510
            </li>
            <li className="flex items-center gap-2 text-brandYellow">
              <span>✉</span>
              <span className="text-white/90">ubedshaikh6089@gmail.com</span>
            </li>
            <li className="flex items-center gap-2 text-brandYellow">
              <span>☎</span>
              <span className="text-white/90">+91 93221 19572</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-14 pt-8 border-t border-white/10 px-6 flex flex-col md:flex-row justify-between gap-4 text-xs tracking-wide">
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
