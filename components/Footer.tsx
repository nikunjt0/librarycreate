import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white py-12 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-4 hover:opacity-80 transition-opacity inline-block">
              <Image
                src="/images/librarycreateNOTEXT.png"
                alt="libraryCreate logo"
                width={50}
                height={50}
                className="object-contain rounded-lg"
              />
              <h3 className="text-2xl font-semibold" style={{ fontFamily: 'var(--font-garamond), Garamond, serif' }}>
                libraryCreate
              </h3>
            </Link>
            <p className="text-sm text-gray-300" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}>
              Changing the world, one library at a time.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold" style={{ fontFamily: 'var(--font-garamond), Garamond, serif' }}>
              Contact
            </h4>
            <div className="space-y-2 text-sm" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}>
              <p>
                <a href="tel:6304401822" className="hover:text-[#DC143C] transition-colors">
                  (630) 440-1822
                </a>
              </p>
              <p>
                <Link href="/contact" className="hover:text-[#DC143C] transition-colors">
                  Contact
                </Link>
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold" style={{ fontFamily: 'var(--font-garamond), Garamond, serif' }}>
              Follow Us
            </h4>
            <div className="flex flex-col gap-3 text-sm" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}>
              <a
                href="https://www.instagram.com/librarycreate/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#DC143C] transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://www.facebook.com/102755891907749"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#DC143C] transition-colors"
              >
                Facebook
              </a>
              <a
                href="https://www.youtube.com/channel/UCLAzzV9MbDaEVvTAi5b16gg"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#DC143C] transition-colors"
              >
                YouTube
              </a>
              <a
                href="https://www.linkedin.com/company/librarycreate-nonprofit/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#DC143C] transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <p className="text-sm text-gray-400 text-center" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}>
            libraryCreate is a registered 501(c)(3) nonprofit organization. Donations are tax-deductible to the full extent allowed by law.
          </p>
        </div>
      </div>
    </footer>
  );
}

