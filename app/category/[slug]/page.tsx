import { notFound } from "next/navigation";
import { categories, getProductsByCategory } from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);
  if (!category) return {};
  return {
    title: category.name,
    description: category.description,
  };
}

export function generateStaticParams() {
  return categories.map((cat) => ({ slug: cat.slug }));
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);
  if (!category) notFound();

  const products = getProductsByCategory(slug);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-amber-500">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900 font-medium">{category.name}</span>
      </nav>

      {/* Header */}
      <div className="mb-10">
        <div className="text-4xl mb-2">{category.icon}</div>
        <h1 className="text-3xl font-black text-gray-900">{category.name}</h1>
        <p className="text-gray-500 mt-2 text-lg">{category.description}</p>
      </div>

      {/* Products Grid */}
      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-center py-20">No products found in this category yet.</p>
      )}

      {/* Other Categories */}
      <div className="mt-16 border-t pt-12">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Browse Other Categories</h2>
        <div className="flex flex-wrap gap-3">
          {categories
            .filter((c) => c.slug !== slug)
            .map((c) => (
              <Link
                key={c.slug}
                href={`/category/${c.slug}`}
                className="flex items-center gap-2 bg-white border border-gray-200 hover:border-amber-400 hover:bg-amber-50 px-4 py-2 rounded-full text-sm font-medium transition-colors"
              >
                <span>{c.icon}</span>
                <span>{c.name}</span>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
