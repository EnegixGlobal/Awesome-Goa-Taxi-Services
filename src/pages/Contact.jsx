import React from "react";
import PageHero from "../sections/PageHero.jsx";
import ContactForm from "../components/ContactForm.jsx";

export default function Contact() {
  return (
    <main className="bg-white text-brandBlack">
      <PageHero
        title="Contact Us"
        subtitle="We're here 24/7 – reach out for bookings, queries or custom packages."
      />
      <ContactForm />
      <section className="w-full h-[70vh] md:h-[80vh] mt-8 md:mt-12">
        <iframe
          title="Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30749.155708602408!2d73.7484605643436!3d15.557178943213179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfeb0071bed88f%3A0x6e382b57b0279db9!2sCalangute%20Calangute!5e0!3m2!1sen!2sin!4v1755371575582!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full"
        />
      </section>
    </main>
  );
}
