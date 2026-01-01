"use client";

import Image from "next/image";
import Link from "next/link";

export default function ProjectRoupas() {
  return (
    <div className="bg-black">
      {/* White square in top left with centered logo */}
      <Link 
        href="/" 
        className="fixed top-0 left-0 w-[100px] h-[100px] bg-white z-50 flex items-center justify-center hover:opacity-80 transition-opacity"
      >
        <Image
          src="/images/librarycreateNOTEXT.png"
          alt="libraryCreate logo"
          width={50}
          height={50}
          className="object-contain"
        />
      </Link>

      {/* Brazil flag in top right */}
      <div className="fixed top-2 right-4 z-50 text-2xl">
        🇧🇷
      </div>

      {/* Hero image section - full viewport height */}
      <div className="relative min-h-screen flex items-center justify-center px-8 py-16">
        <div className="relative w-full max-w-md">
          <Image
            src="/images/projectroupasimage.png"
            alt="Project Roupas"
            width={600}
            height={400}
            className="w-full h-auto object-contain"
            priority
          />
        </div>

        {/* Bottom text and badges - absolute positioned within hero section */}
        <div className="absolute bottom-8 left-0 right-0 flex flex-col items-center gap-6 px-8">
          <p 
            className="text-sm text-white uppercase text-center"
            style={{ fontFamily: 'var(--font-garamond), Garamond, serif' }}
          >
            A partnership that connects Brazilian craft to funded learning spaces. Turn select pieces into direct support for libraries and tech centers in favelas.
          </p>
          
        </div>
      </div>

      {/* What this is section */}
      <div className="bg-black flex flex-col items-center gap-8 max-w-2xl mx-auto px-8 py-24">
        <h3 
          className="text-md text-white uppercase"
          style={{ fontFamily: 'var(--font-garamond), Garamond, serif' }}
        >
          What this is
        </h3>
        <p 
          className="text-sm text-white/70 text-center leading-relaxed"
          style={{ fontFamily: 'var(--font-garamond), Garamond, serif' }}
        >
          You choose 1-5 products (or a limited drop). Each purchase contributes to learning spaces. We deliver the story + the proof.
        </p>
        
        <div className="w-full space-y-4 mt-6">
          <div className="border border-white/20 p-6">
            <p 
              className="text-xs text-white/70 leading-relaxed"
              style={{ fontFamily: 'var(--font-garamond), Garamond, serif' }}
            >
              <strong className="text-white">You keep:</strong> product, pricing, fulfillment, customer experience
            </p>
          </div>
          <div className="border border-white/20 p-6">
            <p 
              className="text-xs text-white/70 leading-relaxed"
              style={{ fontFamily: 'var(--font-garamond), Garamond, serif' }}
            >
              <strong className="text-white">We add:</strong> impact narrative, short-form storytelling, transparency
            </p>
          </div>
        </div>
      </div>

      {/* What we create for your brand section */}
      <div className="bg-black flex flex-col items-center gap-8 max-w-4xl mx-auto px-8 py-24">
        <h3 
          className="text-md text-white uppercase"
          style={{ fontFamily: 'var(--font-garamond), Garamond, serif' }}
        >
          What we create for your brand
        </h3>
        
        <div className="w-full space-y-4">
          <p 
            className="text-sm text-white/70 leading-relaxed"
            style={{ fontFamily: 'var(--font-garamond), Garamond, serif' }}
          >
            <strong className="text-white">Short-form content series (Reels/TikTok/Shorts):</strong> craft/process + maker story + what the purchase funds
          </p>
          <p 
            className="text-sm text-white/70 leading-relaxed"
            style={{ fontFamily: 'var(--font-garamond), Garamond, serif' }}
          >
            <strong className="text-white">Drop-in "impact block" for your product pages:</strong> 3-5 lines + visuals
          </p>
          <p 
            className="text-sm text-white/70 leading-relaxed"
            style={{ fontFamily: 'var(--font-garamond), Garamond, serif' }}
          >
            <strong className="text-white">Post-campaign proof:</strong> a simple public update you can link forever
          </p>
        </div>
      </div>

      {/* Partnership options section */}
      <div className="bg-black flex flex-col items-center gap-8 max-w-4xl mx-auto px-8 py-24">
        <h3 
          className="text-md text-white uppercase"
          style={{ fontFamily: 'var(--font-garamond), Garamond, serif' }}
        >
          Partnership options (pick one)
        </h3>
        
        <div className="w-full space-y-6">
          <div className="border border-white/20 p-6">
            <h4 
              className="text-sm text-white uppercase mb-2"
              style={{ fontFamily: 'var(--font-garamond), Garamond, serif' }}
            >
              Per-item contribution (simplest)
            </h4>
          </div>
          <div className="border border-white/20 p-6">
            <h4 
              className="text-sm text-white uppercase mb-2"
              style={{ fontFamily: 'var(--font-garamond), Garamond, serif' }}
            >
              % of capsule revenue (flexible)
            </h4>
          </div>
          <div className="border border-white/20 p-6">
            <h4 
              className="text-sm text-white uppercase mb-2"
              style={{ fontFamily: 'var(--font-garamond), Garamond, serif' }}
            >
              Milestone goal (shareable: "help fund X by hitting Y sales")
            </h4>
          </div>
        </div>
      </div>

      {/* What we need from you section */}
      <div className="bg-black flex flex-col items-center gap-8 max-w-4xl mx-auto px-8 py-24">
        <h3 
          className="text-md text-white uppercase"
          style={{ fontFamily: 'var(--font-garamond), Garamond, serif' }}
        >
          What we need from you
        </h3>
        
        <div className="w-full space-y-3">
          <p 
            className="text-sm text-white/70 leading-relaxed"
            style={{ fontFamily: 'var(--font-garamond), Garamond, serif' }}
          >
            • Capsule picks + price range
          </p>
          <p 
            className="text-sm text-white/70 leading-relaxed"
            style={{ fontFamily: 'var(--font-garamond), Garamond, serif' }}
          >
            • Brand assets + product photos
          </p>
          <p 
            className="text-sm text-white/70 leading-relaxed"
            style={{ fontFamily: 'var(--font-garamond), Garamond, serif' }}
          >
            • Lead time + any constraints
          </p>
          <p 
            className="text-sm text-white/70 leading-relaxed"
            style={{ fontFamily: 'var(--font-garamond), Garamond, serif' }}
          >
            • Point of contact for approvals
          </p>
        </div>
      </div>

      {/* CTA section */}
      <div className="bg-black flex flex-col items-center gap-8 max-w-4xl mx-auto px-8 pb-24">
        <h3 
          className="text-md text-white uppercase text-center"
          style={{ fontFamily: 'var(--font-garamond), Garamond, serif' }}
        >
          Interested in being a founding Roupas partner?
        </h3>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
          <button 
            className="border border-white/30 px-6 py-3 text-white uppercase hover:bg-white/10 transition-colors text-xs"
            style={{ fontFamily: 'var(--font-garamond), Garamond, serif' }}
          >
            Request Partner Deck
          </button>
          <button 
            className="border border-white/30 px-6 py-3 text-white uppercase hover:bg-white/10 transition-colors text-xs"
            style={{ fontFamily: 'var(--font-garamond), Garamond, serif' }}
          >
            Book a 15-min intro
          </button>
        </div>

        <div className="flex flex-col items-center gap-3 mt-8 text-xs text-white/70" style={{ fontFamily: 'var(--font-garamond), Garamond, serif' }}>
          <a href="mailto:contactlibrarycreate@gmail.com" className="hover:text-white transition-colors">
            contactlibrarycreate@gmail.com
          </a>
          <a href="tel:+16304401822" className="hover:text-white transition-colors">
            +1 (630) 440-1822
          </a>
          <a 
            href="https://www.instagram.com/librarycreate/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            @librarycreate
          </a>
        </div>
      </div>
    </div>
  );
}

