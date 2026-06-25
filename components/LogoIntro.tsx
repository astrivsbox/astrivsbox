"use client";

import { useEffect, useState } from "react";

export default function LogoIntro() {
  const [phase, setPhase] = useState<"visible" | "exiting" | "done">("visible");

  useEffect(() => {
    if (sessionStorage.getItem("introShown")) {
      setPhase("done");
      return;
    }

    const exit = setTimeout(() => setPhase("exiting"), 2200);
    const done = setTimeout(() => {
      setPhase("done");
      sessionStorage.setItem("introShown", "true");
    }, 2900);

    return () => { clearTimeout(exit); clearTimeout(done); };
  }, []);

  if (phase === "done") return null;

  return (
    <div
      className="fixed inset-0 z-[200] bg-black flex flex-col items-center justify-center"
      style={{
        opacity: phase === "exiting" ? 0 : 1,
        transition: phase === "exiting" ? "opacity 0.7s ease" : undefined,
      }}
    >
      <div className="flex flex-col items-center gap-2">
        <div
          className="flex items-baseline gap-3"
          style={{ opacity: 0, animation: "slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards" }}
        >
          <span
            className="font-black tracking-tight"
            style={{ fontSize: "clamp(3rem, 10vw, 6rem)", color: "#00A3FF" }}
          >
            ASTRIVS
          </span>
          <span
            className="font-light tracking-widest text-white"
            style={{ fontSize: "clamp(3rem, 10vw, 6rem)" }}
          >
            BOX
          </span>
        </div>

        <div
          className="h-0.5 w-full origin-left"
          style={{
            background: "#00A3FF",
            opacity: 0,
            animation: "scanLine 0.6s ease 1s forwards, fadeIn 0.1s ease 1s forwards",
          }}
        />

        <p
          className="text-gray-400 tracking-[0.3em] uppercase text-sm"
          style={{ opacity: 0, animation: "fadeIn 0.6s ease 1.3s forwards" }}
        >
          Curated Tech &amp; Beyond
        </p>
      </div>
    </div>
  );
}
