import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Simple NexLev - AI Powered YouTube Niche Finder",
  description:
    "Find profitable niches in YouTube within seconds with Simple NexLev, the most powerful AI-based niche finder.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "Simple NexLev - AI Powered YouTube Niche Finder",
    description:
      "Find profitable niches in YouTube within seconds with Simple NexLev, the most powerful AI-based niche finder.",
    url: "https://simple-nexlev.vercel.app/",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
