import React from "react";
import PageHero from "../sections/PageHero.jsx";

export default function Terms() {
  return (
    <main className="bg-white text-brandBlack">
      <PageHero
        title="Terms & Conditions"
        subtitle="Understand the rules that ensure a safe, reliable and transparent service."
      />
      <section className="max-w-5xl mx-auto px-6 lg:px-10 py-12 md:py-20 text-sm sm:text-base leading-relaxed space-y-10">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold mb-4">
            1. Booking & Confirmation
          </h2>
          <p>
            All bookings are subject to availability. A ride is confirmed only
            after you receive a confirmation message or call from Awesome Goa
            Taxi Service. We reserve the right to decline or reschedule any
            booking due to operational constraints.
          </p>
        </div>
        <div>
          <h2 className="text-xl sm:text-2xl font-bold mb-4">
            2. Pricing & Payment
          </h2>
          <p>
            Prices are communicated transparently at the time of booking. Toll,
            parking, interstate permit fees and night charges (if applicable)
            are extra unless specified. Payment may be made in cash, UPI or
            other approved digital methods at the start or end of the trip.
          </p>
        </div>
        <div>
          <h2 className="text-xl sm:text-2xl font-bold mb-4">
            3. Cancellations & No‑Show
          </h2>
          <p>
            Please inform us as early as possible for any cancellation.
            Last‑minute cancellations or a no‑show may incur a cancellation fee
            to compensate allocated driver time and blocking of the vehicle.
          </p>
        </div>
        <div>
          <h2 className="text-xl sm:text-2xl font-bold mb-4">
            4. Passenger Responsibilities
          </h2>
          <p>
            Passengers must ensure accurate pickup information, maintain
            cleanliness, avoid damage to the vehicle and follow all local laws.
            The driver may refuse service to any passenger engaging in unsafe or
            unlawful behavior.
          </p>
        </div>
        <div>
          <h2 className="text-xl sm:text-2xl font-bold mb-4">
            5. Luggage & Prohibited Items
          </h2>
          <p>
            Standard personal luggage is allowed. Transport of hazardous
            materials, illegal items or live animals (except service animals) is
            strictly prohibited without prior approval.
          </p>
        </div>
        <div>
          <h2 className="text-xl sm:text-2xl font-bold mb-4">
            6. Delays & External Factors
          </h2>
          <p>
            We are not liable for delays caused by traffic, weather, mechanical
            issues, road blocks or events beyond reasonable control. In such
            cases we strive to assist and minimize inconvenience.
          </p>
        </div>
        <div>
          <h2 className="text-xl sm:text-2xl font-bold mb-4">
            7. Limitation of Liability
          </h2>
          <p>
            Our liability is limited to the value of the booking for direct
            issues arising from our service. We are not responsible for
            indirect, incidental or consequential losses.
          </p>
        </div>
        <div>
          <h2 className="text-xl sm:text-2xl font-bold mb-4">
            8. Changes to Terms
          </h2>
          <p>
            We may update these terms periodically. Continued use of the service
            after changes constitutes acceptance of the revised terms.
          </p>
        </div>
        <div>
          <p className="text-xs text-brandBlack/60">
            Last updated: August 2025
          </p>
        </div>
      </section>
    </main>
  );
}
