import Link from "next/link";
import { categories } from "@/lib/products";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-amber-400 text-xl font-black">ASTRIVS</span>
              <span className="text-white text-xl font-light tracking-widest">BOX</span>
            </div>
            <p className="text-sm leading-relaxed">
              Your curated guide to the best products for home, outdoor living, and beyond.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">Categories</h3>
            <ul className="space-y-2 text-sm">
              {categories.map((cat) => (
                <li key={cat.slug}>
                  <Link href={`/category/${cat.slug}`} className="hover:text-amber-400 transition-colors">
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/disclaimer" className="hover:text-amber-400 transition-colors">
                  Affiliate Disclaimer
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-amber-400 transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-xs text-center space-y-2">
          <p>
            AstrivsBox.com is a participant in the Amazon Services LLC Associates Program, an affiliate advertising
            program designed to provide a means for sites to earn advertising fees by advertising and linking to
            Amazon.com.
          </p>
          <p>© {new Date().getFullYear()} Astrivs Box. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
