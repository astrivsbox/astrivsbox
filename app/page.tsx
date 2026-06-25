import Link from "next/link";
import { categories, getProductsByCategory } from "@/lib/products";
import CategoryCard from "@/components/CategoryCard";
import ProductRow from "@/components/ProductRow";

export default function HomePage() {
  const manCave = getProductsByCategory("man-cave");
  const homeGadgets = getProductsByCategory("home-gadgets");
  const outdoor = getProductsByCategory("outdoor");

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ background: "#0a0a0a", minHeight: "92vh" }}>
        {/* Blue glow background */}
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(0,163,255,0.12) 0%, transparent 70%)",
            transform: "translate(20%, -20%)",
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col lg:flex-row items-center gap-12 min-h-[92vh]">
          {/* Left */}
          <div className="flex-1 z-10">
            <div
              className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase mb-6 px-3 py-1.5 rounded-full"
              style={{ border: "1px solid #00A3FF", color: "#00A3FF" }}
            >
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#00A3FF" }} />
              Curated Tech &amp; Lifestyle
            </div>

            <h1
              className="font-black leading-none mb-6"
              style={{ fontSize: "clamp(3rem, 8vw, 6.5rem)" }}
            >
              <span className="text-white">DISCOVER</span>
              <br />
              <span style={{ color: "#00A3FF" }}>THE BEST</span>
              <br />
              <span className="text-white">PRODUCTS.</span>
            </h1>

            <p className="text-gray-400 text-lg mb-10 max-w-md leading-relaxed">
              From cutting-edge tech to must-have gadgets — handpicked products that are actually worth buying.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/category/man-cave"
                className="font-bold px-8 py-4 rounded-lg transition-all duration-200 text-black hover:opacity-80"
                style={{ background: "#00A3FF" }}
              >
                Shop Tech Picks
              </Link>
              <Link
                href="#categories"
                className="font-bold px-8 py-4 rounded-lg transition-all duration-200 text-white hover:border-gray-500"
                style={{ border: "1px solid #2a2a2a" }}
              >
                All Categories
              </Link>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-14">
              {[
                { value: "500+", label: "Products Curated" },
                { value: "5", label: "Categories" },
                { value: "100%", label: "Free to Browse" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-black text-2xl text-white">{s.value}</div>
                  <div className="text-gray-500 text-xs mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — featured image grid */}
          <div className="flex-1 relative hidden lg:grid grid-cols-2 gap-3 max-w-lg">
            {[
              "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=400&q=80",
              "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&q=80",
              "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
              "https://images.unsplash.com/photo-1599669454699-248893623440?w=400&q=80",
            ].map((src, i) => (
              <div
                key={i}
                className="rounded-xl overflow-hidden"
                style={{
                  border: "1px solid #1e1e1e",
                  marginTop: i % 2 === 1 ? "24px" : "0",
                }}
              >
                <img src={src} alt="" className="w-full h-44 object-cover" />
              </div>
            ))}

            {/* Floating badge */}
            <div
              className="absolute -bottom-4 -left-4 px-4 py-3 rounded-xl z-10"
              style={{ background: "#111111", border: "1px solid #00A3FF" }}
            >
              <div className="text-xs text-gray-400">Amazon Associates</div>
              <div className="font-black text-white text-sm">astrivsbox-20 ✓</div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="py-16" style={{ background: "#0a0a0a" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: "#00A3FF" }}>Browse</p>
              <h2 className="font-black text-3xl text-white">Categories</h2>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.map((cat) => (
              <CategoryCard key={cat.slug} category={cat} />
            ))}
          </div>
        </div>
      </section>

      {/* Product Rows */}
      <section className="py-8" style={{ background: "#0a0a0a" }}>
        <div className="mb-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: "#00A3FF" }}>Trending Now</p>
          <h2 className="font-black text-3xl text-white">Featured Picks</h2>
        </div>

        <ProductRow title="Man Cave & Gaming" slug="man-cave" products={manCave} />
        <ProductRow title="Home Gadgets" slug="home-gadgets" products={homeGadgets} />
        <ProductRow title="Outdoor & Adventure" slug="outdoor" products={outdoor} />
      </section>

      {/* Bottom CTA */}
      <section className="py-20 text-center" style={{ background: "#111111", borderTop: "1px solid #1e1e1e" }}>
        <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: "#00A3FF" }}>Don&apos;t Miss Out</p>
        <h2 className="font-black text-4xl text-white mb-4">Ready to upgrade your space?</h2>
        <p className="text-gray-500 mb-8">All products link directly to Amazon. One click, real reviews, fast shipping.</p>
        <Link
          href="/category/man-cave"
          className="inline-block font-bold px-10 py-4 rounded-lg text-black"
          style={{ background: "#00A3FF" }}
        >
          Start Shopping →
        </Link>
      </section>
    </>
  );
}
