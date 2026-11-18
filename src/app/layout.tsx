import type { Metadata, Viewport } from "next";
import "./globals.css";
import "./mobile.css";

export const metadata: Metadata = {
  title: "DVT Exam Prep · Question Bank + PYQs 2025–26",
  description:
    "Data Visualization Techniques (DVT) exam preparation: six merged PYQ papers and the Ward–Grinstein–Keim notes distilled into ranked, exam-ready answers, rapid recall cards and interactive visualizer walkthroughs.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f2f5f9",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@600;700;800&family=Instrument+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@500;600&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
