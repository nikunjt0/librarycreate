"use client";

import Link from "next/link";
import Image from "next/image";

export default function SponsorshipBreakdown() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="absolute md:fixed top-6 left-6 z-50 flex items-center">
        <Link href="/" className="flex items-center gap-3">
          <Image 
            src="/images/librarycreateNOTEXT.png" 
            alt="LibraryCreate Logo" 
            width={50} 
            height={50}
            className="object-contain"
          />
          <span 
            className="text-xl font-semibold text-black hidden md:inline"
            style={{ fontFamily: 'var(--font-garamond), Garamond, serif' }}
          >
            libraryCreate
          </span>
        </Link>
      </div>

      {/* Download PDF */}
      <div className="absolute md:fixed top-6 right-6 z-50 flex flex-col sm:flex-row gap-3 items-end sm:items-center">
        <button
          onClick={() => window.print()}
          className="text-gray-600 hover:text-[#DC143C] transition-colors flex items-center gap-2 text-sm md:text-base px-4 py-2 border border-gray-300 rounded-md hover:border-[#DC143C]"
          style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Download as PDF
        </button>
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 md:px-8 pt-24 pb-20">
        {/* Header Section */}
        <header className="mb-12">
          <div className="mb-6">
            <span 
              className="inline-block px-4 py-2 bg-[#DC143C] text-white text-sm font-medium rounded-full"
              style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
            >
              Sponsorship Opportunities
            </span>
          </div>
          
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            style={{ fontFamily: 'var(--font-garamond), Garamond, serif' }}
          >
            LibraryCreate Sponsorship Breakdown
          </h1>
          
          <p 
            className="text-xl md:text-2xl text-gray-600 mb-6 leading-relaxed"
            style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
          >
            Supporting Tech Literacy Centers in Chicagoland Suburban Areas and Libraries in Foreign Under-Resourced Communities
          </p>
          
          <div className="flex flex-wrap items-center gap-4 text-gray-600 text-sm md:text-base" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}>
            <span>{new Date().getFullYear()}</span>
            <span>•</span>
            <span>501(c)(3) Tax-Deductible</span>
          </div>
        </header>

        {/* Introduction */}
        <div className="mb-12">
          <p 
            className="text-lg md:text-xl text-gray-700 leading-relaxed mb-4"
            style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
          >
            LibraryCreate is a 501(c)(3) nonprofit organization dedicated to expanding access to education by building libraries and tech learning centers for vulnerable student populations. Through strategic partnerships and community engagement, we create sustainable educational infrastructure that transforms lives and communities.
          </p>
          <p 
            className="text-base md:text-lg text-gray-700 leading-relaxed"
            style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
          >
            Our current focus includes establishing tech literacy centers in Chicagoland suburban areas to serve local communities, and building libraries in foreign under-resourced areas where educational infrastructure is limited or non-existent. Your sponsorship directly funds these initiatives and creates lasting impact.
          </p>
        </div>

        {/* Sponsorship Tiers */}
        <div className="mb-12">
          <h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-8"
            style={{ fontFamily: 'var(--font-garamond), Garamond, serif' }}
          >
            Sponsorship Tiers
          </h2>
          
          <div className="space-y-6">
            {/* Basic Sponsor */}
            <div className="bg-gradient-to-r from-[#FFF5F5] to-[#FFE5E5] border-l-4 border-[#DC143C] p-6 rounded-r-lg">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 
                    className="text-2xl md:text-3xl font-bold text-gray-900 mb-2"
                    style={{ fontFamily: 'var(--font-garamond), Garamond, serif' }}
                  >
                    Basic Sponsor
                  </h3>
                  <p 
                    className="text-xl font-semibold text-[#DC143C] mb-4"
                    style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
                  >
                    $0 - $5,000
                  </p>
                </div>
              </div>
              
              <div className="space-y-3">
                <p 
                  className="text-gray-800 leading-relaxed"
                  style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
                >
                  <strong className="text-gray-900">Benefits include:</strong>
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-800 ml-4" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}>
                  <li>Recognition on LibraryCreate website as a sponsor</li>
                  <li>Thank you mention in quarterly newsletter</li>
                  <li>Tax-deductible donation receipt</li>
                  <li>Social media acknowledgment</li>
                  <li>Impact report on how your donation was used</li>
                </ul>
                <p 
                  className="text-gray-700 text-sm mt-4 italic"
                  style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
                >
                  Perfect for individuals, small businesses, and organizations looking to make a meaningful contribution to educational equity.
                </p>
              </div>
            </div>

            {/* Premium Sponsor */}
            <div className="bg-gradient-to-r from-[#FFF5F5] to-[#FFE5E5] border-l-4 border-[#DC143C] p-6 rounded-r-lg">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 
                    className="text-2xl md:text-3xl font-bold text-gray-900 mb-2"
                    style={{ fontFamily: 'var(--font-garamond), Garamond, serif' }}
                  >
                    Premium Sponsor
                  </h3>
                  <p 
                    className="text-xl font-semibold text-[#DC143C] mb-4"
                    style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
                  >
                    $5,000 - $30,000
                  </p>
                </div>
              </div>
              
              <div className="space-y-3">
                <p 
                  className="text-gray-800 leading-relaxed"
                  style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
                >
                  <strong className="text-gray-900">All Basic Sponsor benefits, plus:</strong>
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-800 ml-4" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}>
                  <li>Featured sponsor spot on LibraryCreate website homepage</li>
                  <li>Logo placement in annual impact report</li>
                  <li>Invitation to exclusive sponsor events and site visits</li>
                  <li>Quarterly personalized impact updates with photos and stories</li>
                  <li>Recognition at library or tech center opening ceremonies</li>
                  <li>Custom social media content highlighting your sponsorship</li>
                  <li>Opportunity to visit sponsored locations (when applicable)</li>
                </ul>
                <p 
                  className="text-gray-700 text-sm mt-4 italic"
                  style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
                >
                  Ideal for mid-size companies, foundations, and major donors seeking deeper engagement and visibility.
                </p>
              </div>
            </div>

            {/* Partner Level */}
            <div className="bg-gradient-to-r from-[#FFF5F5] to-[#FFE5E5] border-l-4 border-[#DC143C] p-6 rounded-r-lg">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 
                    className="text-2xl md:text-3xl font-bold text-gray-900 mb-2"
                    style={{ fontFamily: 'var(--font-garamond), Garamond, serif' }}
                  >
                    Partner
                  </h3>
                  <p 
                    className="text-xl font-semibold text-[#DC143C] mb-2"
                    style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
                  >
                    $30,000+
                  </p>
                  <p 
                    className="text-base text-gray-700 italic"
                    style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
                  >
                    Library or Tech Center Named After You
                  </p>
                </div>
              </div>
              
              <div className="space-y-3">
                <p 
                  className="text-gray-800 leading-relaxed"
                  style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
                >
                  <strong className="text-gray-900">All Premium Sponsor benefits, plus:</strong>
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-800 ml-4" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}>
                  <li><strong>Naming rights:</strong> Library or tech center named in your honor (or designated name)</li>
                  <li>Permanent recognition plaque at the facility entrance</li>
                  <li>Dedicated page on LibraryCreate website featuring your partnership story</li>
                  <li>Annual impact report dedicated section highlighting your contributions</li>
                  <li>Exclusive invitation to grand opening ceremony with VIP access</li>
                  <li>Bi-annual private meetings with LibraryCreate leadership</li>
                  <li>Opportunity to participate in site selection and planning process</li>
                  <li>Custom video content featuring your sponsored facility</li>
                  <li>Recognition in all press releases and media coverage related to your facility</li>
                  <li>Potential speaking opportunity at facility opening or annual events</li>
                </ul>
                <p 
                  className="text-gray-700 text-sm mt-4 italic"
                  style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
                >
                  The ultimate partnership for corporations, major foundations, and philanthropic leaders committed to transformational educational impact.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* What Your Sponsorship Funds */}
        <section className="mb-12">
          <h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
            style={{ fontFamily: 'var(--font-garamond), Garamond, serif' }}
          >
            What Your Sponsorship Funds
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white border-2 border-[#DC143C] rounded-lg p-6">
              <h3 
                className="text-2xl font-bold text-gray-900 mb-4"
                style={{ fontFamily: 'var(--font-garamond), Garamond, serif' }}
              >
                Tech Literacy Centers
              </h3>
              <p 
                className="text-gray-700 leading-relaxed mb-4"
                style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
              >
                Chicagoland suburban areas benefit from state-of-the-art tech literacy centers providing:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}>
                <li>Computer access and high-speed internet</li>
                <li>Digital literacy training programs</li>
                <li>Coding and technology workshops</li>
                <li>Career development resources</li>
                <li>Safe learning spaces for students and adults</li>
              </ul>
            </div>
            
            <div className="bg-white border-2 border-[#DC143C] rounded-lg p-6">
              <h3 
                className="text-2xl font-bold text-gray-900 mb-4"
                style={{ fontFamily: 'var(--font-garamond), Garamond, serif' }}
              >
                Libraries in Under-Resourced Areas
              </h3>
              <p 
                className="text-gray-700 leading-relaxed mb-4"
                style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
              >
                International communities receive comprehensive library facilities featuring:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}>
                <li>Diverse collection of books and educational materials</li>
                <li>Reading and study spaces</li>
                <li>Technology integration (computers and internet access)</li>
                <li>Educational programming and workshops</li>
                <li>Community gathering spaces for learning</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="mb-12">
          <h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
            style={{ fontFamily: 'var(--font-garamond), Garamond, serif' }}
          >
            Proven Impact
          </h2>
          
          <div className="bg-gradient-to-r from-[#FFF5F5] to-[#FFE5E5] border-l-4 border-[#DC143C] p-6 rounded-r-lg">
            <p 
              className="text-base md:text-lg text-gray-800 leading-relaxed mb-4"
              style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
            >
              To date, LibraryCreate has successfully built two libraries in Madhya Pradesh, India, serving thousands of students in under-resourced communities. Our track record demonstrates our ability to execute high-impact, community-driven projects that create lasting change.
            </p>
            <p 
              className="text-base md:text-lg text-gray-800 leading-relaxed"
              style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
            >
              Your sponsorship directly contributes to expanding this impact, bringing educational opportunities to communities that need them most—both locally in Chicagoland and globally in under-resourced regions.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mb-12 bg-black rounded-lg p-8 text-center">
          <h2 
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: 'var(--font-garamond), Garamond, serif' }}
          >
            Ready to Make an Impact?
          </h2>
          <p 
            className="text-lg text-white/80 mb-6 max-w-2xl mx-auto"
            style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
          >
            Join us in building a world where access to learning doesn't depend on zip code or geography. Contact us to discuss your sponsorship opportunity.
          </p>
          <div className="flex justify-center">
            <a
              href="mailto:contactlibrarycreate@gmail.com?subject=Sponsorship Inquiry"
              className="inline-block bg-[#DC143C] text-white px-8 py-3 rounded-md hover:bg-[#B9122A] transition-colors text-lg font-medium"
              style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
            >
              Contact Us
            </a>
          </div>
        </section>
      </article>
    </div>
  );
}
