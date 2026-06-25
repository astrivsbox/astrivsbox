"use client";

import Link from "next/link";
import { useState } from "react";
import { categories } from "@/lib/products";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-amber-400 text-2xl font-black tracking-tight">ASTRIVS</span>
            <span className="text-white text-2xl font-light tracking-widest">BOX</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/category/${cat.slug}`}
                className="text-gray-300 hover:text-amber-400 transition-colors text-sm font-medium"
              >
                {cat.name}
              </Link>
            ))}
            <Link
              href="/about"
              className="text-gray-300 hover:text-amber-400 transition-colors text-sm font-medium"
            >
              About
            </Link>
          </nav>

          <button
            className="md:hidden p-2 rounded text-gray-300 hover:text-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-0.5 bg-current mb-1.5" />
            <div className="w-6 h-0.5 bg-current mb-1.5" />
            <div className="w-6 h-0.5 bg-current" />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-gray-800 border-t border-gray-700 px-4 py-4 space-y-3">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/category/${cat.slug}`}
              className="block text-gray-300 hover:text-amber-400 transition-colors py-1"
              onClick={() => setMenuOpen(false)}
            >
              {cat.icon} {cat.name}
            </Link>
          ))}
          <Link
            href="/about"
            className="block text-gray-300 hover:text-amber-400 transition-colors py-1"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
        </div>
      )}
    </header>
  );
}
