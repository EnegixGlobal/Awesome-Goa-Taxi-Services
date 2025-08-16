import React from "react";
import defaultImg from "../../images/aboutus/heroimg.jpg";

export default function PageHero({ title, subtitle, image = defaultImg }) {
  return (
    <section className="relative h-[60vh] min-h-[400px] w-full flex items-center justify-center overflow-hidden">
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center mt-36 md:mt-40">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6 text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)]">
          {title}
        </h1>
        {subtitle && (
          <p className="text-base sm:text-lg md:text-xl text-white/85 leading-relaxed max-w-2xl mx-auto drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
