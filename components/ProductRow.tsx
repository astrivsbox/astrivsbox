import ProductCard from "./ProductCard";
import Link from "next/link";
import type { Product } from "@/lib/products";

type Props = {
  title: string;
  slug: string;
  products: Product[];
};

export default function ProductRow({ title, slug, products }: Props) {
  return (
    <div className="mb-12">
      <div className="flex items-center justify-between mb-4 px-4 sm:px-6 lg:px-8">
        <h2 className="font-black text-xl text-white tracking-tight">{title}</h2>
        <Link
          href={`/category/${slug}`}
          className="text-sm font-medium transition-colors"
          style={{ color: "#00A3FF" }}
        >
          See all →
        </Link>
      </div>
      <div className="flex gap-4 overflow-x-auto scrollbar-hide px-4 sm:px-6 lg:px-8 pb-2">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
