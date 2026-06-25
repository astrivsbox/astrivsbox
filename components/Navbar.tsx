"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { categories } from "@/lib/products";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 border-b"
      style={{ background: "rgba(5,13,26,0.85)", borderColor: "#0f2040", backdropFilter: "blur(16px)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Astrivs's Box"
              width={200}
              height={62}
              className="object-contain"
              style={{ filter: "invert(1)", height: "52px", width: "auto" }}
              priority
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/category/${cat.slug}`}
                className="text-gray-300 hover:text-white transition-colors text-sm font-black tracking-wide uppercase"
              >
                {cat.name}
              </Link>
            ))}
            <Link
              href="/about"
              className="text-gray-300 hover:text-white transition-colors text-sm font-black tracking-wide uppercase"
            >
              About
            </Link>
          </nav>

          <button
            className="md:hidden p-2 text-gray-400 hover:text-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 space-y-1.5">
              <div className="h-0.5 bg-current" />
              <div className="h-0.5 bg-current" />
              <div className="h-0.5 bg-current" />
            </div>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          className="md:hidden border-t px-4 py-4 space-y-4"
          style={{ background: "#050d1a", borderColor: "#0f2040" }}
        >
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/category/${cat.slug}`}
              className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors py-1"
              onClick={() => setMenuOpen(false)}
            >
              <span>{cat.icon}</span>
              <span className="text-sm font-black uppercase tracking-wide">{cat.name}</span>
            </Link>
          ))}
          <Link
            href="/about"
            className="block text-gray-300 hover:text-white transition-colors py-1 text-sm font-black uppercase tracking-wide"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
        </div>
      )}
    </header>
  );
}
