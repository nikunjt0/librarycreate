"use client";

import { useState } from "react";
import Image from "next/image";

interface Award {
  title: string;
  organization: string;
  presenter: string;
  year: string;
  description: string;
  images: string[];
  imageAlts: string[];
}

interface AwardsCarouselProps {
  awards: Award[];
}

export default function AwardsCarousel({ awards }: AwardsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextAward = () => {
    setCurrentIndex((prev) => (prev + 1) % awards.length);
  };

  const prevAward = () => {
    setCurrentIndex((prev) => (prev - 1 + awards.length) % awards.length);
  };

  const goToAward = (index: number) => {
    setCurrentIndex(index);
  };

  const currentAward = awards[currentIndex];

  return (
    <div className="relative bg-gray-50 rounded-lg p-8 lg:p-12">
      {/* Navigation Arrows */}
      <button
        onClick={prevAward}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-colors"
        aria-label="Previous award"
      >
        <svg
          className="w-6 h-6 text-black"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        onClick={nextAward}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-colors"
        aria-label="Next award"
      >
        <svg
          className="w-6 h-6 text-black"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Award Content */}
      <div className={`grid grid-cols-1 ${currentAward.images.length > 1 ? 'lg:grid-cols-[1.2fr_0.8fr]' : 'lg:grid-cols-2'} gap-8 items-center`}>
        {/* Images */}
        <div className="relative">
          {currentAward.images.length === 1 ? (
            <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
              <Image
                src={currentAward.images[0]}
                alt={currentAward.imageAlts[0]}
                fill
                className="object-contain bg-white"
              />
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-3">
              {currentAward.images.map((image, idx) => (
                <div
                  key={idx}
                  className="relative w-full aspect-[3/4] rounded-lg overflow-hidden shadow-lg"
                >
                  <Image
                    src={image}
                    alt={currentAward.imageAlts[idx]}
                    fill
                    className="object-contain bg-white"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Award Details */}
        <div className="space-y-4">
          <h3
            className="text-3xl font-semibold text-black"
            style={{ fontFamily: "var(--font-garamond), Garamond, serif" }}
          >
            {currentAward.title}
          </h3>
          <p
            className="text-lg text-gray-700"
            style={{
              fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
            }}
          >
            <strong className="text-black">{currentAward.organization}</strong>
          </p>
          <p
            className="text-lg text-gray-700"
            style={{
              fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
            }}
          >
            Presented by {currentAward.presenter} in{" "}
            <strong className="text-[#DC143C]">{currentAward.year}</strong>
          </p>
          <p
            className="text-base text-gray-600"
            style={{
              fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
            }}
          >
            {currentAward.description}
          </p>
        </div>
      </div>

      {/* Indicator Dots */}
      <div className="flex justify-center gap-2 mt-8">
        {awards.map((_, index) => (
          <button
            key={index}
            onClick={() => goToAward(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex
                ? "w-8 bg-[#DC143C]"
                : "w-2 bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to award ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

