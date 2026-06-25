import { categories, getProductsByCategory } from "@/lib/products";
import CategoryCard from "@/components/CategoryCard";
import ProductRow from "@/components/ProductRow";
import HeroSlideshow from "@/components/HeroSlideshow";

export default function HomePage() {
  const manCave = getProductsByCategory("man-cave");
  const homeGadgets = getProductsByCategory("home-gadgets");
  const outdoor = getProductsByCategory("outdoor");

  return (
    <>
      {/* Full screen hero slideshow */}
      <HeroSlideshow />

      {/* Categories */}
      <section id="categories" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-black tracking-widest uppercase mb-2 text-center" style={{ color: "#00A3FF" }}>
            Browse
          </p>
          <h2 className="font-black text-3xl text-white text-center mb-8">All Categories</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.map((cat) => (
              <CategoryCard key={cat.slug} category={cat} />
            ))}
          </div>
        </div>
      </section>

      {/* Product rows */}
      <section className="pb-16">
        <ProductRow title="Man Cave & Gaming" slug="man-cave" products={manCave} />
        <ProductRow title="Home Gadgets" slug="home-gadgets" products={homeGadgets} />
        <ProductRow title="Outdoor & Adventure" slug="outdoor" products={outdoor} />
      </section>
    </>
  );
}
