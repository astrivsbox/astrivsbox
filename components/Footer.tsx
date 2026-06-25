import Link from "next/link";
import { categories } from "@/lib/products";

export default function Footer() {
  return (
    <footer className="mt-20 border-t" style={{ background: "#050d1a", borderColor: "#0f2040" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="flex items-baseline gap-2 mb-3">
              <span className="font-black text-xl tracking-tight" style={{ color: "#00A3FF" }}>ASTRIVS&apos;S</span>
              <span className="font-light tracking-widest text-white text-xl">BOX</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Your curated guide to the best tech gadgets, home gear, and beyond.
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold text-sm tracking-widest uppercase mb-4">Categories</h3>
            <ul className="space-y-2">
              {categories.map((cat) => (
                <li key={cat.slug}>
                  <Link href={`/category/${cat.slug}`} className="text-gray-500 hover:text-white transition-colors text-sm">
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-sm tracking-widest uppercase mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/disclaimer" className="text-gray-500 hover:text-white transition-colors text-sm">
                  Affiliate Disclaimer
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-500 hover:text-white transition-colors text-sm">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-6 text-xs text-center space-y-2" style={{ borderColor: "#0f2040" }}>
          <p className="text-gray-600">
            AstrivsBox.com is a participant in the Amazon Services LLC Associates Program. We earn from qualifying purchases.
          </p>
          <p className="text-gray-700">© {new Date().getFullYear()} Astrivs&apos;s Box. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
