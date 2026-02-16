import type { Metadata } from "next";
import { EB_Garamond } from "next/font/google";
import "./globals.css";
import Footer from "../components/Footer";

const garamond = EB_Garamond({
  variable: "--font-garamond",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "libraryCreate",
  description: "libraryCreate",
  openGraph: {
    title: "libraryCreate",
    description: "libraryCreate",
    images: [
      {
        url: "/images/amazon_rainforest_library.png",
        width: 1200,
        height: 630,
        alt: "Amazon rainforest library - libraryCreate",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "libraryCreate",
    description: "libraryCreate",
    images: ["/images/amazon_rainforest_library.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${garamond.variable} antialiased`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
