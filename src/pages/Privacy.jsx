import React from "react";
import PageHero from "../sections/PageHero.jsx";

export default function Privacy() {
  return (
    <main className="bg-white text-brandBlack">
      <PageHero
        title="Privacy Policy"
        subtitle="How we collect, use and safeguard your information."
      />
      <section className="max-w-5xl mx-auto px-6 lg:px-10 py-12 md:py-20 text-sm sm:text-base leading-relaxed space-y-10">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold mb-4">
            1. Information We Collect
          </h2>
          <p>
            We collect only the information required to provide and improve our
            taxi services: name, contact details, pickup / drop details, trip
            preferences and limited technical data such as browser type for
            analytics.
          </p>
        </div>
        <div>
          <h2 className="text-xl sm:text-2xl font-bold mb-4">
            2. Use of Information
          </h2>
          <p>
            Your information is used strictly for booking confirmation, customer
            support, service improvement and legally required record keeping. We
            do not sell your personal data.
          </p>
        </div>
        <div>
          <h2 className="text-xl sm:text-2xl font-bold mb-4">
            3. Cookies & Tracking
          </h2>
          <p>
            Our site may use minimal cookies or analytics tools to understand
            usage patterns and enhance experience. You can manage preferences
            via your browser settings.
          </p>
        </div>
        <div>
          <h2 className="text-xl sm:text-2xl font-bold mb-4">
            4. Data Sharing
          </h2>
          <p>
            We share data only with trusted operational partners (e.g., payment
            or communication providers) under confidentiality commitments, or
            when legally required.
          </p>
        </div>
        <div>
          <h2 className="text-xl sm:text-2xl font-bold mb-4">
            5. Data Security
          </h2>
          <p>
            Reasonable technical and organizational safeguards are applied to
            protect personal data against unauthorized access, alteration or
            misuse.
          </p>
        </div>
        <div>
          <h2 className="text-xl sm:text-2xl font-bold mb-4">
            6. Data Retention
          </h2>
          <p>
            We retain booking and contact records only for as long as necessary
            to deliver services and meet legal obligations, after which they are
            securely deleted.
          </p>
        </div>
        <div>
          <h2 className="text-xl sm:text-2xl font-bold mb-4">7. Your Rights</h2>
          <p>
            You may request correction or deletion of your personal data
            (subject to lawful retention needs). Contact us via the details in
            the footer to exercise rights.
          </p>
        </div>
        <div>
          <h2 className="text-xl sm:text-2xl font-bold mb-4">
            8. Policy Updates
          </h2>
          <p>
            Any changes to this policy will be posted here with an updated
            revision date. Continued use of the service implies acceptance of
            the updated policy.
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
