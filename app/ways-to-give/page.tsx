"use client";

import Image from "next/image";
import Link from "next/link";
import Navigation from "../../components/Navigation";
import {
  CreditCard,
  Landmark,
  Wallet,
  Smartphone,
  Bitcoin,
  TrendingUp,
  Building2,
  Banknote,
  Gift,
} from "lucide-react";

const PAYMENT_OPTIONS = [
  {
    icon: CreditCard,
    title: "Card",
    benefit:
      "Quick and secure — donate instantly with your credit or debit card. Get an immediate tax receipt.",
  },
  {
    icon: Landmark,
    title: "Bank",
    benefit:
      "Direct bank transfer saves processing fees — more of your gift goes directly to building libraries.",
  },
  {
    icon: Wallet,
    title: "PayPal",
    benefit:
      "Use your PayPal balance or linked accounts. Familiar, trusted, and works with your existing funds.",
  },
  {
    icon: Smartphone,
    title: "Google Pay",
    benefit:
      "One-tap giving from your phone. Fast checkout for donors who prefer mobile-first payments.",
  },
  {
    icon: Bitcoin,
    title: "Crypto",
    benefit:
      "Donate Bitcoin or other cryptocurrencies for potential tax advantages. We accept crypto through Every.org.",
  },
  {
    icon: TrendingUp,
    title: "Stocks",
    benefit:
      "Donate appreciated stock — avoid capital gains tax and often get a full fair-market deduction.",
  },
  {
    icon: Building2,
    title: "DAF",
    benefit:
      "Donor Advised Funds make it easy to recommend libraryCreate. Grant directly from your DAF for streamlined giving.",
  },
  {
    icon: Banknote,
    title: "Venmo",
    benefit:
      "Split a donation with friends or give on the go. Venmo connects to your existing account for simple giving.",
  },
  {
    icon: Gift,
    title: "Gift Card",
    benefit:
      "Redeem or purchase gift cards to support us — a thoughtful way to give that still delivers impact.",
  },
] as const;

export default function WaysToGivePage() {
  return (
    <div className="min-h-screen bg-white pt-20 md:pt-0">
      <Navigation />

      {/* Hero Section with Amazon Rainforest */}
      <section className="relative w-full min-h-[45vh] md:min-h-[55vh]">
        <Image
          src="/images/ways-to-give/AmazonRainforest.jpg"
          alt="Amazon rainforest — supporting libraries that nurture growth"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/30" />
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-12 md:pb-20 px-8 text-center">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight max-w-4xl"
            style={{ fontFamily: "var(--font-garamond), Garamond, serif" }}
          >
            Ways To Give
          </h1>
          <p
            className="text-lg md:text-xl text-white/95 mt-4 max-w-2xl"
            style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
          >
            Every gift helps build libraries and tech learning spaces for under-resourced communities.
          </p>
        </div>
      </section>

      {/* Donate CTA */}
      <section className="w-full py-12 bg-[#F5F2EB] border-t border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <p
            className="text-sm uppercase tracking-[0.2em] text-gray-600 mb-4"
            style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
          >
            Ready to make an impact?
          </p>
          <Link
            href="https://www.every.org/librarycreate?theme_color=DC143C&utm_campaign=donate-link#/donate"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#DC143C] text-white px-10 py-4 rounded-md hover:bg-[#B9122A] transition-all text-lg font-medium shadow-lg hover:shadow-xl"
            style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
          >
            Donate Now via Every.org
          </Link>
          <p
            className="text-sm text-gray-600 mt-3"
            style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
          >
            Card, bank, PayPal, crypto & more — all in one place
          </p>
        </div>
      </section>

      {/* Payment Options Grid */}
      <section className="w-full py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
          <h2
            className="text-3xl md:text-4xl font-semibold text-black mb-4 text-center"
            style={{ fontFamily: "var(--font-garamond), Garamond, serif" }}
          >
            Choose Your Preferred Way to Give
          </h2>
          <p
            className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-16"
            style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
          >
            Each option comes with its own benefits. Pick what works best for you.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {PAYMENT_OPTIONS.map(({ icon: Icon, title, benefit }) => (
              <div
                key={title}
                className="group relative bg-[#F5F2EB] rounded-2xl p-8 border border-gray-200/80 hover:border-[#DC143C]/40 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-[#DC143C]/10 text-[#DC143C] group-hover:bg-[#DC143C] group-hover:text-white transition-colors duration-300">
                    <Icon className="w-7 h-7" strokeWidth={1.75} />
                  </div>
                  <h3
                    className="text-xl font-semibold text-black"
                    style={{ fontFamily: "var(--font-garamond), Garamond, serif" }}
                  >
                    {title}
                  </h3>
                </div>
                <p
                  className="text-gray-700 leading-relaxed"
                  style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
                >
                  {benefit}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-20 text-center">
            <Link
              href="https://www.every.org/librarycreate?theme_color=DC143C&utm_campaign=donate-link#/donate"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#DC143C] text-white px-10 py-4 rounded-md hover:bg-[#B9122A] transition-colors text-lg font-medium shadow-lg hover:shadow-xl"
              style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
            >
              Give with Your Preferred Method
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
