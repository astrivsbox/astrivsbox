import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Astrivs Box and how we find the best products for you.",
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-black text-gray-900 mb-4">About Astrivs Box</h1>
      <p className="text-amber-500 font-semibold mb-8">Curated finds for the way you live.</p>

      <div className="prose prose-gray max-w-none space-y-6 text-gray-700 leading-relaxed">
        <p>
          Astrivs Box is a product discovery and recommendation site dedicated to helping you find the best home
          gadgets, outdoor gear, décor, and kitchen essentials — without the endless scrolling.
        </p>

        <p>
          We scour Amazon, Wayfair, and beyond to bring you curated picks that are high-quality, well-reviewed,
          and genuinely worth your money. Every product on this site has been selected because of its strong
          customer ratings, value, and relevance to everyday life.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8">How We Choose Products</h2>
        <p>
          Our picks are based on customer reviews, star ratings, price-to-value ratio, and real-world usability.
          We don&apos;t take sponsorships or payments to feature specific products — our goal is to be a resource
          you can actually trust.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8">Affiliate Disclosure</h2>
        <p>
          Astrivs Box participates in the Amazon Associates Program and other affiliate programs. This means we
          may earn a small commission when you click a link and make a purchase — at no extra cost to you. These
          commissions help us keep the site running and find more great products for you.
        </p>
        <p>
          <Link href="/disclaimer" className="text-amber-500 hover:underline font-medium">
            Read our full affiliate disclaimer →
          </Link>
        </p>
      </div>
    </div>
  );
}
