"use client";

import Image from "next/image";
import Link from "next/link";
import GradientText from "../components/GradientText";
import ScrollReveal from "../components/ScrollReveal";
import StarBorder from "../components/StarBorder";
import Navigation from "../components/Navigation";
import DomeGallery from "../components/DomeGallery";

export default function Home() {
  const galleryImages = [
    { src: '/images/gallery/Book%20Club%20Panel.jpg', alt: 'Book Club Panel' },
    { src: '/images/gallery/682141bf-0adc-4e6e-a52c-2f27f495ca98_orig.jpg', alt: 'Library event' },
    { src: '/images/gallery/34325C4D-705E-439B-AA59-83A2639B7FE8_1_201_a.jpeg', alt: 'Community event' },
    { src: '/images/gallery/04014eba-525f-4ad9-9d0e-95f0ba80f116.JPG', alt: 'Library space' },
    { src: '/images/gallery/0d570046-7769-45a9-8adc-ee016b5b47e0.JPG', alt: 'Library activities' },
    { src: '/images/gallery/BookShelf%20(1).png', alt: 'Bookshelf' },
    { src: '/images/gallery/img-0779_orig.jpg', alt: 'Library photo' },
    { src: '/images/gallery/IMG_A9DDFCE4B139-1%20(1).jpeg', alt: 'Community gathering' },
    { src: '/images/gallery/Chachaji%20School%20Kids.jpg', alt: 'Chachaji School Kids' },
    { src: '/images/gallery/MDYP0169.jpg', alt: 'Library program' },
    { src: '/images/gallery/Screenshot%202024-02-23%20at%209.06.47%20PM.png', alt: 'Library program overview' },
    { src: '/images/gallery/Screenshot%202024-02-23%20at%208.56.51%20PM.png', alt: 'Library activities display' },
    { src: '/images/gallery/Screenshot%202024-02-23%20at%208.23.58%20PM.png', alt: 'Library program screen' },
    { src: '/images/gallery/Screenshot%202025-01-16%20at%206.01.04%E2%80%AFPM.png', alt: 'FMSC in a row'},
    { src: '/images/gallery/Screenshot%202025-01-16%20at%206.01.16%E2%80%AFPM.png', alt: 'FMSC working'},
    { src: '/images/gallery/Tennis%20Rackets%20Circle-0001.jpg', alt: 'Tennis Rackets Circle' },
  ];

  return (
    <div className="min-h-screen bg-white pt-20 md:pt-0">
      <Navigation />

      {/* Hero Section */}
      <section className="relative w-full h-screen">
        <Image
          src="/images/mumbaislumskids.jpg"
          alt="Kids in under-resourced communities"
          fill
          className="object-cover"
          priority
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
        {/* Text Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-8 sm:px-12 lg:px-16 text-center -translate-y-16">
          <div className="max-w-4xl mx-auto space-y-6">
            <h1 
              className="text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-tight"
              style={{ fontFamily: 'var(--font-garamond), Garamond, serif' }}
            >
              Access to learning shouldn't depend on your zip code.
            </h1>
            <p 
              className="text-xl md:text-2xl text-white/90 leading-relaxed"
              style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
            >
              We are a 501(c)(3) nonprofit building libraries and tech learning spaces in under-resourced communities so kids and young adults can dream and build a future.
            </p>
            <div className="pt-4">
              <Link
                href="/past-work"
                className="inline-block bg-white text-black px-8 py-3 rounded-md hover:bg-gray-100 transition-colors text-lg font-medium"
                style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
              >
                See what we've achieved
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="w-full py-16 bg-white">
        <div className="max-w-5xl lg:max-w-6xl mx-auto px-8 text-center">
          <ScrollReveal
            baseOpacity={0}
            enableBlur={true}
            baseRotation={5}
            blurStrength={10}
            textClassName="scroll-reveal-mission text-4xl md:text-5xl lg:text-5xl leading-relaxed"
          >
            Our mission is to make sure children across the world have access to books and technology, irrespective of their race, religion, or financial situation.
          </ScrollReveal>
          <div className="mt-8">
            <Link href="/about" style={{ textDecoration: 'none', display: 'inline-block' }}>
              <StarBorder
                as="button"
                className="star-border-learn-more"
                color="#DC143C"
                speed="5s"
                thickness={0.5}
                style={{ 
                  fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif'
                }}
              >
                Learn about our story
              </StarBorder>
            </Link>
          </div>
        </div>
      </section>

      {/* Traction Section */}
      <section className="w-full py-24 bg-[#CDC9C0]">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left side: Image */}
            <div className="relative w-full aspect-[4/3] lg:aspect-square lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/modern_library_3d.jpg"
                alt="Modern library design for Brazil"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Right side: Traction Content */}
            <div className="space-y-6">
              <h2 
                className="text-4xl md:text-5xl lg:text-6xl font-semibold text-black leading-tight"
                style={{ fontFamily: 'var(--font-garamond), Garamond, serif' }}
              >
                Building Our Next Library in Brazil
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-baseline gap-2">
                  <span 
                    className="text-4xl md:text-5xl font-bold text-[#DC143C]"
                    style={{ fontFamily: 'var(--font-garamond), Garamond, serif' }}
                  >
                    $520
                  </span>
                  <span 
                    className="text-xl md:text-2xl text-gray-700"
                    style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
                  >
                    raised of $50,000 goal
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="w-full">
                  <div className="w-full bg-white/60 rounded-full h-6 overflow-hidden shadow-inner">
                    <div 
                      className="bg-[#DC143C] h-full rounded-full transition-all duration-500 flex items-center justify-end pr-2"
                      style={{ width: '1.04%' }}
                    >
                      <span className="text-xs font-medium text-white">1%</span>
                    </div>
                  </div>
                </div>

                <p 
                  className="text-lg md:text-xl text-gray-800 leading-relaxed pt-4"
                  style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
                >
                  As we hit milestones, we're building Take a Book, Give a Book mini libraries and organizing tech literacy activities for Brazilian youth. Every contribution brings us closer to a full library and tech center that will transform lives.
                </p>

                <div className="pt-4">
                  <Link
                    href="https://www.zeffy.com/en-US/donation-form/donate-to-make-a-difference-6446"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#DC143C] text-white px-8 py-3 rounded-md hover:bg-[#B9122A] transition-colors text-lg font-medium shadow-lg hover:shadow-xl"
                    style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
                  >
                    Support Our Brazil Campaign
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="bg-white">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image - First on mobile, second on desktop */}
            <div className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-[600px] order-1 lg:order-2">
              <Image
                src="/images/projectroupasNOTEXT.png"
                alt="Project Avançar - Artisan handmade Brazilian clothing"
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>

            {/* Text Content - Second on mobile, first on desktop */}
            <div className="space-y-6 order-2 lg:order-1">
              <h2 
                className="text-5xl font-semibold leading-tight"
                style={{ fontFamily: 'var(--font-garamond), Garamond, serif' }}
              >
                <GradientText
                  colors={["#8B0000", "#A02020", "#C04040", "#FF6B6B", "#FF9999"]}
                  animationSpeed={3}
                  showBorder={false}
                  className="left-align"
                >
                  Project Avançar 2026
                </GradientText>
              </h2>
              <p 
                className="text-xl text-black leading-relaxed"
                style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
              >
                Project Avançar is a limited pre-order apparel drop that turns handmade Brazilian clothing into real investment in favela communities. We partner with artisan companies to create small batch pieces, then use the proceeds to help fund libraries and tech learning centers. Spaces where young people can read, study, and build skills for the future.
              </p>
              <div className="pt-4">
                <Link
                  href="/project-avancar"
                  className="inline-block bg-[#DC143C] text-white px-8 py-3 rounded-md hover:bg-[#B9122A] transition-colors text-lg font-medium"
                  style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
                >
                  Learn more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Current Impact Section */}
      <section className="relative w-full bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left side: Image */}
            <div className="relative w-full aspect-[4/3] lg:aspect-square lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/brazilian-kids.jpg"
                alt="Children in Brazilian favelas"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Right side: Impact Stats and Text */}
            <div className="space-y-8">
              <div>
                <h2 
                  className="text-4xl md:text-5xl lg:text-6xl font-semibold text-black mb-6 leading-tight"
                  style={{ fontFamily: 'var(--font-garamond), Garamond, serif' }}
                >
                  Our Current Impact
                </h2>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8 py-8">
                <div className="space-y-2">
                  <div 
                    className="text-5xl md:text-6xl font-bold text-[#DC143C]"
                    style={{ fontFamily: 'var(--font-garamond), Garamond, serif' }}
                  >
                    2
                  </div>
                  <div 
                    className="text-lg md:text-xl text-black font-medium"
                    style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
                  >
                    Libraries Built
                  </div>
                  <div 
                    className="text-sm md:text-base text-gray-600"
                    style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
                  >
                    Madhya Pradesh, India
                  </div>
                </div>

                <div className="space-y-2">
                  <div 
                    className="text-5xl md:text-6xl font-bold text-[#DC143C]"
                    style={{ fontFamily: 'var(--font-garamond), Garamond, serif' }}
                  >
                    3K
                  </div>
                  <div 
                    className="text-lg md:text-xl text-black font-medium"
                    style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
                  >
                    Books Donated
                  </div>
                </div>

                <div className="space-y-2">
                  <div 
                    className="text-5xl md:text-6xl font-bold text-[#DC143C]"
                    style={{ fontFamily: 'var(--font-garamond), Garamond, serif' }}
                  >
                    $50K
                  </div>
                  <div 
                    className="text-lg md:text-xl text-black font-medium"
                    style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
                  >
                    Goal for Next
                  </div>
                  <div 
                    className="text-sm md:text-base text-gray-600"
                    style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
                  >
                    Favelas of Brazil
                  </div>
                </div>
              </div>

              <p 
                className="text-lg md:text-xl text-black leading-relaxed"
                style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
              >
                We're raising $50,000 to build our next library in the favelas of São Paulo, Rio de Janeiro, or Brasília. Help us bring books and technology to children who need it most.
              </p>

              <div className="pt-4">
                <Link
                  href="https://www.zeffy.com/en-US/donation-form/donate-to-make-a-difference-6446"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#DC143C] text-white px-8 py-4 rounded-md hover:bg-[#B9122A] transition-colors text-lg font-medium shadow-lg hover:shadow-xl"
                  style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
                >
                  Support Our Next Library
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="w-full bg-white" style={{ height: '100vh' }}>
        <DomeGallery images={galleryImages} grayscale={false} fit={0.8} />
      </section>
    </div>
  );
}
