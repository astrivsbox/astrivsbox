"use client";

import { useEffect, useState } from "react";

export default function LogoIntro() {
  const [phase, setPhase] = useState<"visible" | "exiting" | "done">("visible");

  useEffect(() => {
    if (sessionStorage.getItem("introShown")) {
      setPhase("done");
      return;
    }
    const exit = setTimeout(() => setPhase("exiting"), 3200);
    const done = setTimeout(() => {
      setPhase("done");
      sessionStorage.setItem("introShown", "true");
    }, 3900);
    return () => { clearTimeout(exit); clearTimeout(done); };
  }, []);

  if (phase === "done") return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center"
      style={{
        background: "#0a0a0a",
        opacity: phase === "exiting" ? 0 : 1,
        transition: phase === "exiting" ? "opacity 0.7s ease" : undefined,
      }}
    >
      <div className="flex flex-col items-center gap-6">
        {/* Animated box SVG */}
        <svg
          viewBox="0 0 200 220"
          width="120"
          height="132"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer hexagon — traces on */}
          <polygon
            points="100,8 186,55 186,149 100,196 14,149 14,55"
            stroke="#00A3FF"
            strokeWidth="4"
            fill="none"
            strokeLinejoin="round"
            style={{
              strokeDasharray: 580,
              strokeDashoffset: 580,
              animation: "traceHex 1s ease forwards 0.2s",
            }}
          />

          {/* Inner hex / cube face edges — traces on after outer */}
          <polygon
            points="100,32 164,68 164,140 100,176 36,140 36,68"
            stroke="#00A3FF"
            strokeWidth="3"
            fill="none"
            strokeLinejoin="round"
            style={{
              strokeDasharray: 440,
              strokeDashoffset: 440,
              animation: "traceHex 0.8s ease forwards 1s",
            }}
          />

          {/* Y dividers from center */}
          <line x1="100" y1="104" x2="100" y2="32"
            stroke="#00A3FF" strokeWidth="3"
            style={{
              strokeDasharray: 72,
              strokeDashoffset: 72,
              animation: "traceHex 0.4s ease forwards 1.7s",
            }}
          />
          <line x1="100" y1="104" x2="164" y2="140"
            stroke="#00A3FF" strokeWidth="3"
            style={{
              strokeDasharray: 76,
              strokeDashoffset: 76,
              animation: "traceHex 0.4s ease forwards 1.9s",
            }}
          />
          <line x1="100" y1="104" x2="36" y2="140"
            stroke="#00A3FF" strokeWidth="3"
            style={{
              strokeDasharray: 76,
              strokeDashoffset: 76,
              animation: "traceHex 0.4s ease forwards 2.1s",
            }}
          />

          {/* Inner rounded box — pops in last */}
          <rect
            x="58" y="62" width="84" height="84" rx="14"
            fill="#00A3FF"
            fillOpacity="0.15"
            stroke="#00A3FF"
            strokeWidth="2"
            style={{
              opacity: 0,
              animation: "fadeInBox 0.5s ease forwards 2.4s",
            }}
          />
        </svg>

        {/* Text */}
        <div
          className="text-center"
          style={{ opacity: 0, animation: "fadeInBox 0.6s ease forwards 2.6s" }}
        >
          <div className="flex items-baseline gap-2 justify-center">
            <span className="font-black tracking-tight text-4xl" style={{ color: "#00A3FF" }}>
              ASTRIVS&apos;S
            </span>
            <span className="font-light tracking-widest text-white text-4xl">BOX</span>
          </div>
          <p className="text-gray-600 tracking-[0.3em] uppercase text-xs mt-2">
            Curated Tech &amp; Beyond
          </p>
        </div>
      </div>

      <style>{`
        @keyframes traceHex {
          to { stroke-dashoffset: 0; }
        }
        @keyframes fadeInBox {
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
