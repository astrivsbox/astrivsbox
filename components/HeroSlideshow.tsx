"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

const slides = [
  {
    id: 1,
    tag: "Man Cave & Gaming",
    title: "Level Up\nYour Setup",
    subtitle: "RGB. Power. Performance.",
    image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=900&q=90",
    href: "/category/man-cave",
    glow1: "rgba(0,163,255,0.35)",
    glow2: "rgba(0,80,180,0.2)",
  },
  {
    id: 2,
    tag: "Home Gadgets",
    title: "Smarter\nEvery Day",
    subtitle: "The devices that run your world.",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=900&q=90",
    href: "/category/home-gadgets",
    glow1: "rgba(139,92,246,0.35)",
    glow2: "rgba(80,0,200,0.2)",
  },
  {
    id: 3,
    tag: "Man Cave Must-Have",
    title: "Sound\nWithout Limits",
    subtitle: "Wireless audio. Crystal clear.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=900&q=90",
    href: "/category/man-cave",
    glow1: "rgba(0,163,255,0.3)",
    glow2: "rgba(0,200,255,0.15)",
  },
  {
    id: 4,
    tag: "Outdoor & Adventure",
    title: "Built for\nthe Wild",
    subtitle: "Gear that keeps up with you.",
    image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=900&q=90",
    href: "/category/outdoor",
    glow1: "rgba(16,185,129,0.3)",
    glow2: "rgba(0,100,80,0.2)",
  },
];

export default function HeroSlideshow() {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);

  const goTo = useCallback((index: number) => {
    setFading(true);
    setTimeout(() => {
      setCurrent(index);
      setFading(false);
    }, 400);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      goTo((current + 1) % slides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [current, goTo]);

  const slide = slides[current];

  return (
    <div className="relative w-full overflow-hidden" style={{ minHeight: "100vh" }}>
      {/* Glowing orb background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 70% 50% at 50% 30%, ${slide.glow1} 0%, ${slide.glow2} 40%, transparent 75%)`,
          transition: "background 1s ease",
        }}
      />

      {/* Stars/dot particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(28)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: i % 3 === 0 ? "2px" : "1px",
              height: i % 3 === 0 ? "2px" : "1px",
              opacity: 0.15 + (i % 5) * 0.07,
              top: `${(i * 37 + 5) % 90}%`,
              left: `${(i * 53 + 8) % 95}%`,
            }}
          />
        ))}
      </div>

      {/* Slide content */}
      <div
        className="relative z-10 flex flex-col items-center justify-start pt-16 pb-8 px-4 min-h-screen"
        style={{ opacity: fading ? 0 : 1, transition: "opacity 0.4s ease" }}
      >
        {/* Tag */}
        <div
          className="text-xs font-black tracking-widest uppercase mb-5 px-4 py-1.5 rounded-full"
          style={{ border: "1px solid rgba(0,163,255,0.4)", color: "#00A3FF", background: "rgba(0,163,255,0.08)" }}
        >
          {slide.tag}
        </div>

        {/* Title */}
        <h1
          className="font-black text-center text-white leading-none mb-4 whitespace-pre-line"
          style={{ fontSize: "clamp(3.5rem, 9vw, 7.5rem)", letterSpacing: "-0.02em" }}
        >
          {slide.title}
        </h1>

        {/* Subtitle */}
        <p className="text-gray-400 text-lg mb-8 text-center">{slide.subtitle}</p>

        {/* CTA buttons */}
        <div className="flex gap-4 mb-10">
          <Link
            href={slide.href}
            className="font-bold px-7 py-3 rounded-full text-sm transition-all hover:opacity-90"
            style={{ background: "#00A3FF", color: "#000" }}
          >
            Shop Now
          </Link>
          <Link
            href="#categories"
            className="font-bold px-7 py-3 rounded-full text-sm text-white transition-all hover:bg-white/10"
            style={{ border: "1px solid rgba(255,255,255,0.25)" }}
          >
            See All Categories
          </Link>
        </div>

        {/* Product image */}
        <div className="relative w-full max-w-2xl mx-auto">
          {/* Glow under image */}
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-16 blur-3xl rounded-full pointer-events-none"
            style={{ background: slide.glow1, opacity: 0.6 }}
          />
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full object-contain relative z-10 rounded-2xl"
            style={{ maxHeight: "420px", filter: "drop-shadow(0 0 40px rgba(0,163,255,0.2))" }}
          />
        </div>

        {/* Dot indicators */}
        <div className="flex gap-3 mt-8">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === current ? "28px" : "8px",
                height: "8px",
                background: i === current ? "#00A3FF" : "rgba(255,255,255,0.25)",
              }}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
