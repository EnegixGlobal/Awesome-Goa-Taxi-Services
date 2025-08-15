import React from "react";

const stats = [
  { label: "KM Driven", value: 870000, icon: "fa-solid fa-gauge" },
  { label: "People Dropped", value: 4978, icon: "fa-solid fa-users" },
  { label: "Taxis & Drivers", value: 80, icon: "fa-solid fa-taxi" },
  { label: "Happy People", value: 2480, icon: "fa-solid fa-face-smile" },
];

export default function StatsSection() {
  return (
    <section
      className="bg-[#f7f7f7] text-brandBlack px-6 lg:px-10 py-24"
      id="stats"
    >
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 text-[11px] font-semibold tracking-wide text-brandBlack/70 mb-4">
          <span className="w-2 h-2 rounded-full bg-brandYellow inline-block" />
          <span>Our fun facts</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-16 tracking-tight">
          Numbers speak
        </h2>
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-white rounded-xl shadow-sm p-10 flex flex-col items-start sm:items-center text-left sm:text-center"
            >
              <div className="text-brandYellow text-3xl mb-5">
                <i className={s.icon} aria-hidden="true" />
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-2 leading-none">
                {s.value.toLocaleString()}
              </div>
              <div className="text-[12px] sm:text-xs font-semibold uppercase tracking-wider text-brandBlack/70">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
