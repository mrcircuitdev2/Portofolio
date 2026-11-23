import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" });
const spaceGrotesk = Space_Grotesk({ variable: "--font-space-grotesk", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Circuit — Unity & VR Game Development Portfolio",
  description: "A portfolio showcasing Circuit's Unity projects, VR experiments, and gameplay systems.",
  keywords: ["Circuit", "Unity Developer", "VR", "Gorilla Tag", "Hurricane VR", "C#", "Portfolio"],
  authors: [{ name: "Circuit" }],
  openGraph: {
    title: "Circuit — Unity & VR Game Development Portfolio",
    description: "A portfolio showcasing Unity projects, VR experiments, and gameplay systems.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${spaceGrotesk.variable} bg-dark text-body antialiased`}>
        <div className="grain-overlay">{children}</div>
      </body>
    </html>
  );
}
