"use client";

import type { Product } from "@/lib/products";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  return (
    <div
      className="rounded-xl overflow-hidden flex flex-col group transition-all duration-300 flex-shrink-0"
      style={{ background: "#0a1628", border: "1px solid #0f2040", width: "260px" }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = "#00A3FF";
        (e.currentTarget as HTMLDivElement).style.boxShadow = "0 0 20px rgba(0,163,255,0.15)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = "#0f2040";
        (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
      }}
    >
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {product.badge && (
          <span
            className="absolute top-3 left-3 text-xs font-bold px-2 py-1 rounded"
            style={{ background: "#00A3FF", color: "#000" }}
          >
            {product.badge}
          </span>
        )}
      </div>
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-bold text-white text-sm leading-snug mb-1">{product.name}</h3>
        <p className="text-gray-500 text-xs mb-4 flex-1 leading-relaxed">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="font-black text-lg" style={{ color: "#00A3FF" }}>{product.price}</span>
          <a
            href={product.affiliateUrl}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="text-xs font-bold px-3 py-2 rounded transition-all duration-200 text-black"
            style={{ background: "#00A3FF" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#0077CC")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#00A3FF")}
          >
            Shop Now →
          </a>
        </div>
      </div>
    </div>
  );
}
