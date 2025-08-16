import React, { useState, useRef } from "react";

// Booking section with form submission via formsubmit.co
// Assumption: using the header email for receiving form submissions. Replace if needed.
export default function BookingSection() {
  // Local state for date so we can show a placeholder (native date inputs ignore placeholder on many mobile browsers)
  const [date, setDate] = useState("");
  const dateRef = useRef(null);
  return (
    <section
      id="book"
      className="relative z-20 px-6 lg:px-10 pt-16 md:pt-28 pb-16 md:pb-28 border-b border-white/20"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-14 md:gap-16 lg:gap-20 items-start">
        {/* Left content */}
        <div className="flex-1 max-w-xl">
          <div className="flex items-center gap-2 text-sm font-semibold tracking-wide mb-6">
            <span className="w-2 h-2 rounded-full bg-brandYellow inline-block" />
            <span className="text-white/80">Looking for taxi?</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.05] mb-6 md:mb-8">
            <span className="block">Make your</span>
            <span className="block">booking</span>
          </h2>
          <p className="text-white/70 leading-relaxed text-sm sm:text-base md:text-lg max-w-md">
            Our taxis commit to make your trips unique by best answering your
            needs.
          </p>
        </div>

        {/* Right: Form */}
        <form
          action="https://formsubmit.co/ubedshaikh6089@gmail.com"
          method="POST"
          className="flex-1 w-full"
        >
          {/* formsubmit config */}
          <input type="hidden" name="_subject" value="New Taxi Booking" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 xl:gap-8">
            <div className="col-span-1">
              <input
                type="text"
                name="name"
                required
                placeholder="Your Name"
                className="w-full h-14 md:h-20 rounded-full bg-brandGray px-8 md:px-10 text-sm md:text-base placeholder-white/35 focus:outline-none focus:ring-2 focus:ring-brandYellow/60 transition"
              />
            </div>
            <div className="col-span-1">
              <input
                type="email"
                name="email"
                required
                placeholder="Email Address"
                className="w-full h-14 md:h-20 rounded-full bg-brandGray px-8 md:px-10 text-sm md:text-base placeholder-white/35 focus:outline-none focus:ring-2 focus:ring-brandYellow/60 transition"
              />
            </div>
            <div className="col-span-1">
              <input
                type="number"
                min="1"
                name="passengers"
                required
                placeholder="Passengers #"
                className="w-full h-14 md:h-20 rounded-full bg-brandGray px-8 md:px-10 text-sm md:text-base placeholder-white/35 focus:outline-none focus:ring-2 focus:ring-brandYellow/60 transition appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              />
            </div>
            <div className="col-span-1">
              <input
                type="text"
                name="pickup"
                required
                placeholder="Pick-up Address"
                className="w-full h-14 md:h-20 rounded-full bg-brandGray px-8 md:px-10 text-sm md:text-base placeholder-white/35 focus:outline-none focus:ring-2 focus:ring-brandYellow/60 transition"
              />
            </div>
            <div className="col-span-1">
              <input
                type="text"
                name="dropoff"
                required
                placeholder="Drop-off Address"
                className="w-full h-14 md:h-20 rounded-full bg-brandGray px-8 md:px-10 text-sm md:text-base placeholder-white/35 focus:outline-none focus:ring-2 focus:ring-brandYellow/60 transition"
              />
            </div>
            <div className="col-span-1 relative">
              <input
                ref={dateRef}
                // When empty we keep type=text so placeholder shows; on focus we switch to date
                type={date ? "date" : "text"}
                name="date"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
                onFocus={(e) => {
                  if (!date) e.target.type = "date";
                }}
                onBlur={(e) => {
                  if (!date) e.target.type = "text"; // revert to text so placeholder is visible again
                }}
                placeholder="DD/MM/YYYY"
                className="w-full h-14 md:h-20 rounded-full bg-brandGray px-8 md:px-10 pr-14 text-sm md:text-base text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-brandYellow/60 transition"
              />
              <button
                type="button"
                aria-label="Open date picker"
                onClick={() => {
                  // Try the new showPicker API if available; fallback to focusing
                  if (dateRef.current) {
                    if (typeof dateRef.current.showPicker === "function") {
                      try {
                        dateRef.current.showPicker();
                      } catch (_) {
                        dateRef.current.focus();
                      }
                    } else {
                      dateRef.current.focus();
                    }
                  }
                }}
                className="absolute right-6 top-1/2 -translate-y-1/2 text-brandYellow text-xl p-2 rounded-full hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-brandYellow/50"
              >
                <i className="fa-regular fa-calendar" />
              </button>
            </div>
            <div className="col-span-1 relative md:col-span-1">
              <select
                name="time_slot"
                className="w-full h-14 md:h-20 rounded-full bg-brandGray px-8 md:px-10 pr-16 text-sm md:text-base placeholder-white/35 focus:outline-none focus:ring-2 focus:ring-brandYellow/60 transition appearance-none"
                defaultValue="12AM-6AM"
              >
                <option>12AM-6AM</option>
                <option>6AM-12PM</option>
                <option>12PM-6PM</option>
                <option>6PM-12AM</option>
              </select>
              <span className="absolute right-8 top-1/2 -translate-y-1/2 text-brandYellow text-lg pointer-events-none">
                <i className="fa-regular fa-clock"></i>
              </span>
            </div>
            <div className="col-span-1 md:col-span-1 flex items-stretch">
              <button
                type="submit"
                className="w-full h-14 md:h-20 rounded-full bg-brandYellow text-black font-semibold tracking-wide text-sm md:text-lg hover:brightness-95 transition shadow-pill"
              >
                Book Now
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
