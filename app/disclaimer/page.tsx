import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Affiliate Disclaimer",
  description: "Affiliate disclosure for Astrivs Box.",
};

export default function DisclaimerPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-black text-gray-900 mb-2">Affiliate Disclaimer</h1>
      <p className="text-gray-500 text-sm mb-8">Last updated: June 2026</p>

      <div className="space-y-6 text-gray-700 leading-relaxed">
        <p>
          AstrivsBox.com is a participant in the Amazon Services LLC Associates Program, an affiliate advertising
          program designed to provide a means for sites to earn advertising fees by advertising and linking to
          Amazon.com.
        </p>

        <p>
          We may also participate in other affiliate programs, including but not limited to Wayfair&apos;s affiliate
          program and Commission Junction (CJ Affiliate).
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8">What This Means For You</h2>
        <p>
          When you click a link on this website and make a purchase, we may receive a small commission from the
          retailer. This comes at <strong>no additional cost to you</strong> — the price you pay is exactly the
          same whether you use our link or go directly to the retailer.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8">Our Commitment</h2>
        <p>
          We only recommend products we genuinely believe are high quality and good value. We are not paid by
          manufacturers or brands to feature specific products. Our recommendations are based on customer reviews,
          ratings, and real-world value.
        </p>

        <p>
          Your trust is our most important asset. If you ever have questions about a recommendation or our
          affiliate relationships, feel free to reach out.
        </p>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mt-8">
          <p className="text-sm text-amber-800 font-medium">
            In accordance with the FTC&apos;s guidelines, we disclose that links on this site may be affiliate links
            and we may receive compensation for purchases made through these links.
          </p>
        </div>
      </div>
    </div>
  );
}
