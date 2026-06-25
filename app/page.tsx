import Link from "next/link";
import { categories, getFeaturedProducts } from "@/lib/products";
import CategoryCard from "@/components/CategoryCard";
import ProductCard from "@/components/ProductCard";

export default function HomePage() {
  const featured = getFeaturedProducts();

  return (
    <>
      {/* Hero */}
      <section className="bg-gray-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-amber-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-full mb-4 tracking-wide uppercase">
            Curated Just For You
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight mb-6">
            The Best Products for{" "}
            <span className="text-amber-400">Home, Outdoor</span> &amp; Beyond
          </h1>
          <p className="text-gray-300 text-lg sm:text-xl mb-8 max-w-2xl mx-auto">
            We find the top-rated, best-value products so you don&apos;t have to. From smart home gadgets to outdoor
            gear — shop with confidence.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="#categories"
              className="bg-amber-400 hover:bg-amber-500 text-gray-900 font-bold px-8 py-3 rounded-full transition-colors"
            >
              Explore Categories
            </Link>
            <Link
              href="/disclaimer"
              className="border border-gray-600 hover:border-gray-400 text-gray-300 font-medium px-8 py-3 rounded-full transition-colors"
            >
              About Our Picks
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">Shop by Category</h2>
          <p className="text-gray-500 mt-2">Find exactly what you&apos;re looking for</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <CategoryCard key={cat.slug} category={cat} />
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900">Featured Picks</h2>
            <p className="text-gray-500 mt-2">Our most loved, top-rated products right now</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/category/home-gadgets"
              className="inline-block bg-gray-900 hover:bg-gray-700 text-white font-semibold px-8 py-3 rounded-full transition-colors"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="bg-amber-50 border-y border-amber-100 py-10">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-3xl mb-2">⭐</div>
            <h3 className="font-bold text-gray-900">Top-Rated Only</h3>
            <p className="text-gray-500 text-sm mt-1">Every product is highly rated by real customers</p>
          </div>
          <div>
            <div className="text-3xl mb-2">🔍</div>
            <h3 className="font-bold text-gray-900">Researched &amp; Curated</h3>
            <p className="text-gray-500 text-sm mt-1">We dig through thousands of options so you don&apos;t have to</p>
          </div>
          <div>
            <div className="text-3xl mb-2">🛒</div>
            <h3 className="font-bold text-gray-900">Easy Shopping</h3>
            <p className="text-gray-500 text-sm mt-1">One click takes you straight to Amazon or Wayfair</p>
          </div>
        </div>
      </section>
    </>
  );
}
