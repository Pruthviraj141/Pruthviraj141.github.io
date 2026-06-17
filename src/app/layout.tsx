import type { Metadata } from "next";
import { Bricolage_Grotesque, Space_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { LenisProvider } from "@/components/providers/LenisProvider";
import ScrollProgress from "@/components/ui/ScrollProgress";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { candidate } from "@/lib/data";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${candidate.name} — Technical Engineer`,
  description: candidate.tagline,
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/apple-icon.png",
  },
  openGraph: {
    images: ["/opengraph-image.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${bricolage.variable} ${spaceMono.variable} antialiased font-sans bg-bg text-text-2 relative`}>
        {/* Noise overlay */}
        <div className="fixed inset-0 z-[999] pointer-events-none opacity-[0.03] mix-blend-difference" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

        <LenisProvider>
          <ScrollProgress />
          <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark" enableSystem={false} disableTransitionOnChange>
            <div className="relative z-10 flex flex-col min-h-screen border-x border-border max-w-7xl mx-auto bg-surface shadow-[0_0_100px_rgba(0,0,0,0.5)]">
              <Navbar />
              <main id="main-content" className="flex-1">{children}</main>
              <Footer />
            </div>
          </ThemeProvider>
        </LenisProvider>
      </body>
    </html>
  );
}
