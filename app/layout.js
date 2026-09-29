jsx
import { Inter } from "next/font/google";
import Script from "next/script";

import Navigation from "./(components)/(commoncomponents)/Navbar";
import Footer from "./(components)/(commoncomponents)/Footer";
import Provider from "./(components)/Provider";

import { SpeedInsights } from "@vercel/speed-insights/next";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "IUhub | Educational Resources",
  description: "Your comprehensive educational resource platform",
  keywords: [
    "education",
    "resources",
    "engineering",
    "study materials",
    "engineering graphics",
    "IUhub",
    "Indus University",
    "first year",
    "second year",
    "PYQ",
    "assignments",
  ],
  authors: [{ name: "IUhub Team" }],
  openGraph: {
    title: "IUhub | Educational Resources",
    description: "Your comprehensive educational resource platform",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={inter.className}
        style={{ backgroundColor: "#e7e9eb" }}
      >
        <Provider>
          <Navigation />

          <main style={{ minHeight: "calc(100vh - 60px)" }}>
            {children}
            <SpeedInsights />
          </main>

          <Footer />
        </Provider>

        {/* Google AdSense */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2684436410242774"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />

        {/* Bootstrap JavaScript */}
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />

        {/* Font Awesome */}
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/js/all.min.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}

