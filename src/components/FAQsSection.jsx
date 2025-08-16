import React, { useState } from "react";

const faqs = [
  {
    id: 1,
    q: "How do I confirm a Goa airport pickup booking?",
    a: "Choose your vehicle, share flight details and contact number, then pay a small token (optional) to lock it. We send instant WhatsApp confirmation with driver details 30–60 mins before landing.",
  },
  {
    id: 2,
    q: "Can I schedule rides for multiple days?",
    a: "Yes. You can pre‑book individual transfers or a dedicated vehicle with driver for sightseeing across multiple days—just mention the dates in the form or while calling.",
  },
  {
    id: 3,
    q: "What if my flight is delayed?",
    a: "We actively track major carrier flight statuses. Delays under 2 hours are covered without extra waiting charges. For longer delays we coordinate a revised pickup time.",
  },
  {
    id: 4,
    q: "Which payment modes are available?",
    a: "Cash, UPI (Google Pay / PhonePe / Paytm), major wallets and bank transfer. Corporate invoicing is available on request.",
  },
];

export default function FAQsSection() {
  const [open, setOpen] = useState(faqs[0].id);

  return (
    <section id="faqs" className="bg-[#f7f7f7] text-brandBlack">
      <div className="max-w-5xl mx-auto px-6 py-24">
        <div className="flex items-center justify-center gap-2 text-[11px] font-semibold tracking-wide text-brandBlack/70 mb-4">
          <span className="w-2 h-2 rounded-full bg-brandYellow inline-block" />
          <span>Our faqs</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-14 tracking-tight text-center">
          Questions & answers
        </h2>
        <div className="space-y-4">
          {faqs.map((item) => {
            const isOpen = item.id === open;
            return (
              <div
                key={item.id}
                className={
                  isOpen
                    ? "bg-brandYellow rounded-sm p-8 transition-colors"
                    : "bg-white rounded-sm border border-[#ececec] p-0 transition-colors"
                }
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : item.id)}
                  aria-expanded={isOpen}
                  className={
                    "w-full text-left flex items-start justify-between gap-6 px-8 py-6 sm:py-5 sm:px-8 " +
                    (isOpen ? "font-semibold" : "font-medium")
                  }
                >
                  <span className="flex-1 text-[13px] sm:text-sm leading-snug">
                    {item.q}
                  </span>
                  <span
                    className="mt-1 w-5 h-5 flex items-center justify-center text-xs rounded-full bg-brandBlack text-white"
                    aria-hidden="true"
                  >
                    {isOpen ? (
                      <i className="fa-solid fa-minus" />
                    ) : (
                      <i className="fa-solid fa-plus" />
                    )}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-8 pb-8 -mt-2 text-[12px] sm:text-[13px] leading-relaxed">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      {/* CTA banner */}
      <div className="bg-brandYellow">
        <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row md:items-center md:justify-between gap-10">
          <div className="max-w-xl">
            <p className="text-[11px] font-semibold tracking-wide uppercase mb-3 text-brandBlack/70">
              Make a call or fill form
            </p>
            <h3 className="text-xl sm:text-2xl font-semibold tracking-tight">
              Call our agent to get a quote.
            </h3>
          </div>
          <a
            href="#booking"
            className="inline-flex items-center justify-center bg-brandBlack text-white rounded-full px-8 h-14 text-sm font-semibold hover:opacity-90 transition self-start"
          >
            Book Taxi Now
          </a>
        </div>
      </div>
    </section>
  );
}
