"use client";

import Image from "next/image";
import Link from "next/link";
import StaggeredMenuComponent from "./StaggeredMenu";

// Type-safe wrapper for StaggeredMenu to avoid TypeScript inference issues
const StaggeredMenu = StaggeredMenuComponent as any;

export default function Navigation() {
  const menuItems = [
    { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
    { label: 'Project Avançar', ariaLabel: 'Learn about Project Avançar', link: '/project-avancar' },
    { label: 'About', ariaLabel: 'Learn about us', link: '/about' },
    { label: 'Past Work', ariaLabel: 'View our past work', link: '/past-work' },
    { label: 'Donate Now', ariaLabel: 'Donate to libraryCreate', link: 'https://www.zeffy.com/en-US/donation-form/donate-to-make-a-difference-6446' }
  ];

  return (
    <>
      {/* Mobile Menu */}
      <div className="md:hidden">
        <StaggeredMenu
          accentColor="#DC143C"
          logoUrl="/images/librarycreateNOTEXT.png"
          items={menuItems}
          socialItems={[]}
          displaySocials={false}
          displayItemNumbering={true}
          isFixed={true}
          menuButtonColor="#000"
          openMenuButtonColor="#000"
          position="right"
        />
      </div>

      {/* Navigation Bar */}
      <nav className="relative z-50 w-full border-b border-gray-200 bg-white hidden md:block">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
          <div className="flex items-center justify-between h-20">
            {/* Left side: Logo and Brand Name (Home Link) */}
            <Link 
              href="/" 
              className="flex items-center gap-4 hover:opacity-80 transition-opacity"
            >
              <Image
                src="/images/librarycreateNOTEXT.png"
                alt="libraryCreate logo"
                width={50}
                height={50}
                className="object-contain"
              />
              <h1 className="text-2xl font-semibold text-black" style={{ fontFamily: 'var(--font-garamond), Garamond, serif' }}>
                libraryCreate
              </h1>
            </Link>

            {/* Right side: Navigation Links and Donate Button */}
            <div className="flex items-center gap-12">
              {/* Navigation Menu */}
              <div className="hidden md:flex items-center gap-10">
                <Link
                  href="/project-avancar"
                  className="text-black hover:text-gray-700 transition-colors text-base font-bold tracking-wide cursor-pointer"
                  style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', pointerEvents: 'auto' }}
                >
                  Project Avançar
                </Link>
                <Link
                  href="/about"
                  className="text-black hover:text-gray-700 transition-colors text-base font-bold tracking-wide cursor-pointer"
                  style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', pointerEvents: 'auto' }}
                >
                  About
                </Link>
                <Link
                  href="/past-work"
                  className="text-black hover:text-gray-700 transition-colors text-base font-bold tracking-wide cursor-pointer"
                  style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', pointerEvents: 'auto' }}
                >
                  Past Work
                </Link>
              </div>

              {/* Donate Now Button */}
              <Link
                href="https://www.zeffy.com/en-US/donation-form/donate-to-make-a-difference-6446"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#DC143C] text-white px-6 py-2.5 rounded-md hover:bg-[#B9122A] transition-colors text-base font-medium"
                style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
              >
                Donate Now
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

