import React from "react";
import dialerIcon from "../../images/Floating-Icons/dialer.png";
import whatsappIcon from "../../images/Floating-Icons/whatsapp.png";

// Floating call + WhatsApp buttons (appear on all pages)
export default function FloatingActions() {
  const phone = "+919049661996"; // new phone number (no spaces)
  const whatsappMsg = encodeURIComponent(
    "Hello Sir, I would like to book your taxi service."
  );

  return (
    <div className="fixed z-50 bottom-4 right-4 flex flex-col items-end gap-3 sm:gap-4">
      {/* WhatsApp */}
      <a
        href={`https://wa.me/${phone}?text=${whatsappMsg}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative"
      >
        <img
          src={whatsappIcon}
          alt="WhatsApp"
          className="w-14 h-14 sm:w-16 sm:h-16 object-contain drop-shadow-lg animate-float hover:scale-110 transition-transform"
          loading="lazy"
        />
      </a>
      {/* Call */}
      <a href={`tel:${phone}`} aria-label="Call Now" className="group relative">
        <img
          src={dialerIcon}
          alt="Call"
          className="w-14 h-14 sm:w-16 sm:h-16 object-contain drop-shadow-lg animate-float hover:scale-110 transition-transform"
          loading="lazy"
        />
      </a>
    </div>
  );
}
