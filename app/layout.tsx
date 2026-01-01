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
