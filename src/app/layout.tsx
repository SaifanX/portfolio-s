import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mohammed Saifan — Solutions Architect & Systems Engineer",
  description:
    "15-year-old developer based in Bangalore. State Winner of TechnoFest Hackathon 2026. Architecting reactive engines, 3D simulations, and mission-critical AI.",
  keywords: [
    "Mohammed Saifan",
    "SaifanX",
    "Solutions Architect",
    "Bangalore Developer",
    "TechnoFest 2026 Winner",
    "AirGuard",
    "Strategos",
    "Next.js",
    "Three.js",
  ],
  authors: [{ name: "Mohammed Saifan" }],
  openGraph: {
    title: "Mohammed Saifan — Solutions Architect & Systems Engineer",
    description:
      "15-year-old developer based in Bangalore. State Winner of TechnoFest Hackathon 2026. Architecting reactive engines, 3D simulations, and mission-critical AI.",
    url: "https://saifan.dev",
    siteName: "Mohammed Saifan Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="antialiased bg-[#070709] text-zinc-100 min-h-screen selection:bg-crimson selection:text-white">
        {children}
      </body>
    </html>
  );
}
