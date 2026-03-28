import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "ContentLab",
  description: "Web-based tool for creating and testing educational media content with user control.",
  metadataBase: new URL("https://contentlab.app"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} antialiased h-full`}>
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow flex flex-col items-center justify-center py-20 px-6">
          <div className="w-full max-w-4xl">
            {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
