import React from "react";
import PageHero from "../sections/PageHero.jsx";
import { vehicles } from "../data/vehicles.js";

function BookingFormStandalone() {
  return (
    <section className="py-24 bg-white text-brandBlack" id="booking-form">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-12">
          <span className="inline-block w-2 h-2 rounded-full bg-brandYellow mb-5" />
          <p className="uppercase tracking-wide font-semibold text-[11px] text-brandBlack/70 mb-2">
            Looking for a taxi
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6">
            Make your booking
          </h2>
          <p className="text-[13px] sm:text-sm leading-relaxed text-brandBlack/70">
            Booking a ride with us is quick, easy, and hassle-free! Whether you
            need a ride for your daily commute, an airport transfer, or a
            long-distance journey, we've got you covered. Simply choose your
            pickup and drop-off location, select your preferred vehicle, and
            confirm your ride in just a few clicks.
          </p>
        </div>
        <form
          action="https://formsubmit.co/ubedshaikh6089@gmail.com"
          method="POST"
          className="space-y-10"
        >
          <input
            type="hidden"
            name="_subject"
            value="New Taxi Booking (Full Page)"
          />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <fieldset className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            <legend className="sr-only">Select Information</legend>
            <input
              name="name"
              required
              placeholder="Your Name"
              className="h-10 sm:h-12 rounded-full bg-[#f2f2f2] px-5 text-[11px] sm:text-xs md:text-[13px] focus:outline-none focus:ring-2 focus:ring-brandYellow/70"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Email address"
              className="h-10 sm:h-12 rounded-full bg-[#f2f2f2] px-5 text-[11px] sm:text-xs md:text-[13px] focus:outline-none focus:ring-2 focus:ring-brandYellow/70"
            />
            <input
              name="phone"
              required
              placeholder="Phone"
              className="h-10 sm:h-12 rounded-full bg-[#f2f2f2] px-5 text-[11px] sm:text-xs md:text-[13px] focus:outline-none focus:ring-2 focus:ring-brandYellow/70"
            />
            <input
              name="passengers"
              type="number"
              min="1"
              required
              placeholder="Passengers #"
              className="h-10 sm:h-12 rounded-full bg-[#f2f2f2] px-5 text-[11px] sm:text-xs md:text-[13px] focus:outline-none focus:ring-2 focus:ring-brandYellow/70 appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />
            <input
              name="pickup"
              required
              placeholder="Pick up address"
              className="h-10 sm:h-12 rounded-full bg-[#f2f2f2] px-5 text-[11px] sm:text-xs md:text-[13px] focus:outline-none focus:ring-2 focus:ring-brandYellow/70"
            />
            <input
              name="dropoff"
              required
              placeholder="Drop off address"
              className="h-10 sm:h-12 rounded-full bg-[#f2f2f2] px-5 text-[11px] sm:text-xs md:text-[13px] focus:outline-none focus:ring-2 focus:ring-brandYellow/70"
            />
            <div className="relative">
              <input
                type="date"
                name="date"
                required
                className="h-10 sm:h-12 w-full rounded-full bg-[#f2f2f2] px-5 pr-12 text-[11px] sm:text-xs md:text-[13px] focus:outline-none focus:ring-2 focus:ring-brandYellow/70 [color-scheme:light] appearance-none [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:right-0"
              />
              <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-brandBlack/40 text-xs sm:text-sm">
                <i className="fa-regular fa-calendar" />
              </span>
            </div>
            <div className="relative">
              <input
                type="time"
                name="time"
                required
                className="h-10 sm:h-12 w-full rounded-full bg-[#f2f2f2] px-5 pr-12 text-[11px] sm:text-xs md:text-[13px] focus:outline-none focus:ring-2 focus:ring-brandYellow/70 [color-scheme:light] appearance-none [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:right-0"
              />
              <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-brandBlack/40 text-xs sm:text-sm">
                <i className="fa-regular fa-clock" />
              </span>
            </div>
          </fieldset>
          <div>
            <p className="text-[11px] font-semibold mb-3">Select Car Type</p>
            <div className="flex flex-wrap gap-6 text-[11px] text-brandBlack/70">
              {["Any type", "Hybrid", "SUV", "Luxury", "Vans"].map((label) => (
                <label
                  key={label}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <input
                    type="radio"
                    name="car_type"
                    value={label}
                    defaultChecked={label === "Any type"}
                    className="w-3 h-3 accent-brandYellow"
                  />
                  <span>{label}</span>
                </label>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            <div>
              <p className="text-[11px] font-semibold mb-3">
                Other Information
              </p>
              <select
                name="car_model"
                className="w-full h-10 sm:h-12 rounded-full bg-[#f2f2f2] px-5 text-[11px] sm:text-xs md:text-[13px] focus:outline-none focus:ring-2 focus:ring-brandYellow/70"
                defaultValue=""
              >
                <option value="" disabled>
                  Select car model
                </option>
                <option value="Any">Any Available</option>
                {vehicles.map((v) => (
                  <option key={v.id} value={v.name}>
                    {v.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="pt-6 md:pt-9">
              <select
                name="driver_age"
                className="w-full h-10 sm:h-12 rounded-full bg-[#f2f2f2] px-5 text-[11px] sm:text-xs md:text-[13px] focus:outline-none focus:ring-2 focus:ring-brandYellow/70"
              >
                <option value="Any">Driver age</option>
                <option value="18-25">18-25</option>
                <option value="26-40">26-40</option>
                <option value="41+">41+</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="flex items-center gap-2 text-[11px] cursor-pointer select-none">
                <input
                  type="checkbox"
                  name="pro_driver"
                  value="Yes"
                  className="accent-brandYellow w-3 h-3"
                />
                <span>Professional driver</span>
              </label>
            </div>
          </div>
          <div className="text-[10px] text-brandBlack/60">
            By using this form you agree to our terms & conditions.
          </div>
          <div>
            <button
              type="submit"
              className="bg-brandYellow text-black font-semibold px-10 h-10 sm:h-12 rounded-full text-[11px] sm:text-xs md:text-sm shadow-pill hover:brightness-95 transition"
            >
              Book Now
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default function BookRide() {
  return (
    <main className="bg-white text-brandBlack">
      <PageHero
        title="Book A Ride"
        subtitle="Quick, easy & reliable taxi booking across Goa."
      />
      <BookingFormStandalone />
    </main>
  );
}
