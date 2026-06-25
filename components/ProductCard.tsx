import type { Product } from "@/lib/products";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        {product.badge && (
          <span className="absolute top-3 left-3 bg-amber-400 text-gray-900 text-xs font-bold px-2 py-1 rounded-full">
            {product.badge}
          </span>
        )}
      </div>
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-semibold text-gray-900 text-base mb-1 leading-snug">{product.name}</h3>
        <p className="text-gray-500 text-sm mb-3 flex-1 leading-relaxed">{product.description}</p>
        <div className="flex items-center justify-between mt-auto">
          <span className="text-amber-500 font-bold text-lg">{product.price}</span>
          <a
            href={product.affiliateUrl}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold text-sm px-4 py-2 rounded-full transition-colors"
          >
            Shop Now →
          </a>
        </div>
      </div>
    </div>
  );
}
