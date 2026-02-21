"use client";

import Image from "next/image";
import Link from "next/link";

export default function ProjectAvancar() {
  return (
    <div className="bg-black min-h-screen">
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

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center px-8 py-24 pt-32">
        <div className="relative w-full max-w-4xl mx-auto text-center">
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-4 leading-tight"
            style={{ fontFamily: 'var(--font-garamond), Garamond, serif' }}
          >
            Library Create 2026: Brazil Expansion
          </h1>
          <p 
            className="text-xl md:text-2xl text-white/80 mb-8"
            style={{ fontFamily: 'var(--font-garamond), Garamond, serif' }}
          >
            Project Avançar
          </p>
          <div className="mt-12 max-w-2xl mx-auto">
            <Image
              src="/images/projectavancar.png"
              alt="Project Avançar"
              width={600}
              height={400}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>
      </section>

      {/* Organization Overview */}
      <section className="max-w-4xl mx-auto px-8 py-16">
        <div className="border-l-4 border-white/30 pl-6 mb-8">
          <h2 
            className="text-2xl md:text-3xl text-white uppercase mb-4"
            style={{ fontFamily: 'var(--font-garamond), Garamond, serif' }}
          >
            Organization Overview
          </h2>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-lg p-8">
          <p 
            className="text-base md:text-lg text-white/80 leading-relaxed"
            style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
          >
            Library Create is a 501(c)(3) nonprofit organization dedicated to expanding access to education by building libraries for some of the most vulnerable student populations around the world. To date, Library Create has successfully built two to three libraries in the state of Madhya Pradesh, India, demonstrating the organization's ability to execute high-impact, community-driven projects in underserved communities. Building on this foundation, Library Create is now pursuing its first expansion into Brazil as part of the Library Create 2026 Project Avancar initiative.
          </p>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="max-w-4xl mx-auto px-8 py-16">
        <div className="border-l-4 border-white/30 pl-6 mb-8">
          <h2 
            className="text-2xl md:text-3xl text-white uppercase mb-4"
            style={{ fontFamily: 'var(--font-garamond), Garamond, serif' }}
          >
            Mission and Vision
          </h2>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-lg p-8">
          <p 
            className="text-base md:text-lg text-white/80 leading-relaxed"
            style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
          >
            Library Create operates on the belief that education is one of the most effective long-term solutions for addressing inequality and improving economic mobility. The organization focuses on creating accessible learning environments that support literacy, curiosity, and skill development. Through the Brazil expansion, Library Create aims to establish a hybrid library and technology center that provides students with access to books, digital tools, and a safe space for learning in communities where educational infrastructure is limited.
          </p>
        </div>
      </section>

      {/* Why Brazil */}
      <section className="max-w-4xl mx-auto px-8 py-16">
        <div className="border-l-4 border-white/30 pl-6 mb-8">
          <h2 
            className="text-2xl md:text-3xl text-white uppercase mb-4"
            style={{ fontFamily: 'var(--font-garamond), Garamond, serif' }}
          >
            Why Brazil?
          </h2>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-lg p-8">
          <p 
            className="text-base md:text-lg text-white/80 leading-relaxed"
            style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
          >
            Brazil was selected as the next expansion market due to both the scale of educational inequality and a strong personal connection driving the initiative. One of the project leads, Lalit Gurrapu, has had the opportunity to visit Brazil and experience firsthand both the country's cultural richness and the educational challenges faced by communities in low-income and vulnerable areas. This experience served as a catalyst for pursuing an initiative that brings educational resources back to a place that had a meaningful personal impact. The project will focus on underserved urban communities, including rainforest villages and low-income neighborhoods in cities such as Rio de Janeiro and São Paulo.
          </p>
        </div>
      </section>

      {/* Project Concept */}
      <section className="max-w-4xl mx-auto px-8 py-16">
        <div className="border-l-4 border-white/30 pl-6 mb-8">
          <h2 
            className="text-2xl md:text-3xl text-white uppercase mb-4"
            style={{ fontFamily: 'var(--font-garamond), Garamond, serif' }}
          >
            Project Concept: Library and Technology Center
          </h2>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-lg p-8">
          <p 
            className="text-base md:text-lg text-white/80 leading-relaxed"
            style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
          >
            The proposed initiative centers on building a community-based library and technology center designed to improve literacy and digital access among youth. The space would include physical learning materials, computer access, and internet connectivity to support both traditional and modern forms of education. By concentrating resources in high-need areas, the project aims to generate measurable educational impact and long-term benefits for students and their communities.
          </p>
        </div>
      </section>

      {/* Entrepreneurial Fundraising Model */}
      <section className="max-w-4xl mx-auto px-8 py-16">
        <div className="border-l-4 border-white/30 pl-6 mb-8">
          <h2 
            className="text-2xl md:text-3xl text-white uppercase mb-4"
            style={{ fontFamily: 'var(--font-garamond), Garamond, serif' }}
          >
            Entrepreneurial Fundraising Model
          </h2>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-lg p-8">
          <p 
            className="text-base md:text-lg text-white/80 leading-relaxed"
            style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
          >
            The Brazil expansion will be supported by an entrepreneurial approach to fundraising that blends philanthropy with revenue-generating partnerships. LibraryCreate plans to partner with Brazilian consumer brands to create products that allocate a portion of proceeds directly toward funding the construction and operation of the library. These partnerships provide a sustainable funding mechanism while allowing brands to align with a meaningful social impact initiative.
          </p>
        </div>
      </section>

      {/* Leadership and Motivation */}
      <section className="max-w-4xl mx-auto px-8 py-16 pb-24">
        <div className="border-l-4 border-white/30 pl-6 mb-8">
          <h2 
            className="text-2xl md:text-3xl text-white uppercase mb-4"
            style={{ fontFamily: 'var(--font-garamond), Garamond, serif' }}
          >
            Leadership and Motivation
          </h2>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-lg p-8">
          <p 
            className="text-base md:text-lg text-white/80 leading-relaxed"
            style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
          >
            Education has played a defining role in the leadership behind this initiative. Having been personally impacted by scholarships and access to educational opportunities, the project leaders are deeply committed to extending those same opportunities to students who lack access to basic educational resources. The Brazil expansion represents a values-driven continuation of Library Create's global mission and a focused effort to scale educational impact through thoughtful partnerships and disciplined execution.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-4xl mx-auto px-8 pb-24">
        <div className="border-t border-white/20 pt-12">
          <div className="flex flex-col items-center gap-6">
            <h3 
              className="text-xl text-white uppercase text-center"
              style={{ fontFamily: 'var(--font-garamond), Garamond, serif' }}
            >
              Get Involved
            </h3>
            <div className="flex flex-col items-center gap-4 text-sm text-white/70" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}>
              <a href="mailto:team@librarycreate.org" className="hover:text-white transition-colors">
                team@librarycreate.org
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
      </section>
    </div>
  );
}
