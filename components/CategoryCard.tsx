import Link from "next/link";
import type { Category } from "@/lib/products";

type Props = {
  category: Category;
};

export default function CategoryCard({ category }: Props) {
  return (
    <Link href={`/category/${category.slug}`} className="group block relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
      <img
        src={category.image}
        alt={category.name}
        className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <div className="text-3xl mb-1">{category.icon}</div>
        <h3 className="text-white font-bold text-xl leading-tight">{category.name}</h3>
        <p className="text-gray-300 text-sm mt-1 leading-snug">{category.description}</p>
        <span className="inline-block mt-3 text-amber-400 text-sm font-semibold group-hover:underline">
          Browse picks →
        </span>
      </div>
    </Link>
  );
}
