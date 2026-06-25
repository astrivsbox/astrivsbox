import Link from "next/link";
import type { Category } from "@/lib/products";

type Props = {
  category: Category;
};

export default function CategoryCard({ category }: Props) {
  return (
    <Link
      href={`/category/${category.slug}`}
      className="group relative rounded-xl overflow-hidden block"
      style={{ border: "1px solid #2a2a2a" }}
    >
      <img
        src={category.image}
        alt={category.name}
        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.9) 40%, transparent)" }} />
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <div className="text-2xl mb-1">{category.icon}</div>
        <h3 className="font-black text-white text-lg leading-tight">{category.name}</h3>
        <span
          className="text-xs font-bold mt-1 inline-block opacity-0 group-hover:opacity-100 transition-opacity"
          style={{ color: "#00A3FF" }}
        >
          Explore →
        </span>
      </div>
    </Link>
  );
}
