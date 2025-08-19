import React, { useState } from "react";
import ThankYouModal from "./ThankYouModal.jsx";

export default function ContactForm() {
  const [showThankYou, setShowThankYou] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    try {
      await fetch(form.action, {
        method: form.method,
        body: new FormData(form),
      });

      // Show thank you modal
      setShowThankYou(true);
      // Reset form
      form.reset();
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };
  return (
    <section className="py-28">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block w-2 h-2 rounded-full bg-brandYellow mb-6" />
          <p className="uppercase tracking-wide font-semibold text-[12px] text-brandBlack/60 mb-3">
            Contact with us now
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
            Leave a message
          </h2>
        </div>
        <form
          onSubmit={handleSubmit}
          action="https://formsubmit.co/awesomegoataxiservicecab@gmail.com"
          method="POST"
          className="space-y-10"
        >
          <input type="hidden" name="_subject" value="New Contact Message" />
          <input type="hidden" name="_captcha" value="false" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <input
              name="name"
              placeholder="Your name"
              required
              className="h-16 rounded-full bg-[#f5f5f5] px-8 text-sm focus:outline-none focus:ring-2 focus:ring-brandYellow/70"
            />
            <input
              type="email"
              name="email"
              placeholder="Email address"
              required
              className="h-16 rounded-full bg-[#f5f5f5] px-8 text-sm focus:outline-none focus:ring-2 focus:ring-brandYellow/70"
            />
            <input
              name="phone"
              placeholder="Phone"
              required
              className="h-16 rounded-full bg-[#f5f5f5] px-8 text-sm focus:outline-none focus:ring-2 focus:ring-brandYellow/70"
            />
            <input
              name="subject"
              placeholder="Subject"
              required
              className="h-16 rounded-full bg-[#f5f5f5] px-8 text-sm focus:outline-none focus:ring-2 focus:ring-brandYellow/70"
            />
            <div className="md:col-span-2">
              <textarea
                name="message"
                placeholder="Write message"
                rows="6"
                required
                className="w-full rounded-[3rem] bg-[#f5f5f5] px-8 py-6 text-sm focus:outline-none focus:ring-2 focus:ring-brandYellow/70 resize-none"
              />
            </div>
            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full h-20 bg-brandYellow rounded-full font-semibold text-lg text-black shadow-pill hover:brightness-95 transition"
              >
                Send Message
              </button>
            </div>
          </div>
        </form>

        <ThankYouModal
          isOpen={showThankYou}
          onClose={() => setShowThankYou(false)}
          message="Thank you for contacting us! We'll get back to you soon."
        />
      </div>
    </section>
  );
}
