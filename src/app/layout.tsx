import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://saifanx.netlify.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Mohammed Saifan — Solutions Architect & Systems Engineer",
  description:
    "15-year-old developer & systems builder based in Bangalore. State Runner-Up at TechnoFest Hackathon 2026. Architecting reactive full-stack engines, 3D simulations, and drone hardware systems.",
  keywords: [
    "Mohammed Saifan",
    "SaifanX",
    "Solutions Architect",
    "Bangalore Developer",
    "TechnoFest 2026 Runner-Up",
    "AirGuard",
    "Strategos",
    "ESP32",
    "Convex",
    "Next.js",
    "Three.js",
  ],
  authors: [{ name: "Mohammed Saifan", url: siteUrl }],
  creator: "Mohammed Saifan",
  publisher: "Mohammed Saifan",
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Mohammed Saifan Portfolio",
    title: "Mohammed Saifan — Solutions Architect & Systems Engineer",
    description:
      "15-year-old developer and systems builder in Bangalore. TechnoFest 2026 State 2nd Place. React, TypeScript, Convex, ESP32 hardware & drone avionics.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mohammed Saifan — Portfolio & Systems Architecture",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammed Saifan — Solutions Architect & Systems Engineer",
    description:
      "15-year-old developer & systems builder based in Bangalore. State Runner-Up at TechnoFest 2026. Drone avionics, reactive full-stack & 3D compute.",
    images: ["/og-image.png"],
    creator: "@saifanx07",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&family=Syne:wght@700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-[#070709] text-zinc-100 min-h-screen selection:bg-crimson selection:text-white font-sans">
        {children}
      </body>
    </html>
  );
}
