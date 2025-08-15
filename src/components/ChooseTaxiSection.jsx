import React, { useState, useMemo } from "react";
import { vehicles, VEHICLE_CATEGORIES } from "../data/vehicles";

function classNames(...cls) {
  return cls.filter(Boolean).join(" ");
}

function VehicleCard({ v }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col items-center relative overflow-hidden group">
      <div className="pt-10 px-6 flex-1 flex flex-col items-center w-full">
        <div className="w-full mb-6 relative rounded-t-2xl overflow-hidden bg-[#f7f7f7] flex items-center justify-center">
          <img
            src={v.image}
            alt={`${v.name} ${v.model}`}
            className="w-full h-56 object-cover rounded-t-2xl transition-transform duration-500 group-hover:scale-[1.05]"
            loading="lazy"
          />
        </div>
        <div className="w-20 h-20 rounded-full bg-brandBlack text-white grid place-items-center text-3xl mb-6">
          <i className="fa-solid fa-taxi" aria-hidden="true" />
        </div>
        <h3 className="font-semibold text-lg tracking-tight text-center mb-2">
          {v.name} {v.model} Model
        </h3>
        <ul className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-[11px] uppercase font-semibold tracking-wider text-brandBlack/60 mb-6">
          <li className="flex items-center gap-1">
            <i
              className="fa-solid fa-user-group text-[10px]"
              aria-hidden="true"
            />
            {v.capacity} Pax
          </li>
          <li className="flex items-center gap-1">
            <i
              className="fa-solid fa-suitcase text-[10px]"
              aria-hidden="true"
            />
            {v.luggage} Lugg
          </li>
          {v.ac && (
            <li className="flex items-center gap-1">
              <i
                className="fa-solid fa-snowflake text-[10px]"
                aria-hidden="true"
              />
              AC
            </li>
          )}
          <li className="flex items-center gap-1">
            <i className="fa-solid fa-gear text-[10px]" aria-hidden="true" />
            {v.transmission}
          </li>
        </ul>
      </div>
      <div className="w-full px-6 pb-10">
        <button
          type="button"
          className="w-full bg-[#f2f2f2] hover:bg-brandYellow hover:text-brandBlack transition-colors font-semibold text-sm rounded-full py-4 tracking-wide"
        >
          Book Taxi
        </button>
      </div>
    </div>
  );
}

export default function ChooseTaxiSection() {
  const [category, setCategory] = useState("all");

  const filtered = useMemo(
    () =>
      category === "all"
        ? vehicles
        : vehicles.filter((v) => v.category === category),
    [category]
  );

  return (
    <section
      id="fleet"
      className="bg-white text-brandBlack py-28 px-6 lg:px-10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center gap-2 text-[11px] font-semibold tracking-wide text-brandBlack/70 mb-4">
          <span className="w-2 h-2 rounded-full bg-brandYellow inline-block" />
          <span>Our best cars</span>
        </div>
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-center mb-12">
          Choose taxi
        </h2>

        <div className="flex flex-wrap gap-3 justify-center mb-16">
          {VEHICLE_CATEGORIES.map((c) => {
            const active = c.key === category;
            return (
              <button
                key={c.key}
                onClick={() => setCategory(c.key)}
                className={classNames(
                  "px-7 py-4 rounded-xl text-[11px] font-semibold tracking-wide transition-all",
                  active
                    ? "bg-brandBlack text-white shadow-md"
                    : "bg-[#f2f2f2] text-brandBlack hover:bg-brandYellow/60"
                )}
              >
                {c.label}
              </button>
            );
          })}
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((v) => (
            <VehicleCard key={v.id} v={v} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center text-sm text-brandBlack/60 mt-10">
            No vehicles available in this category right now.
          </div>
        )}
      </div>
    </section>
  );
}
