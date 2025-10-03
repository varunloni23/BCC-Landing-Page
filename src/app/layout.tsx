import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Blue Carbon Credits - Ocean Climate Solutions",
  description: "Protect coastal ecosystems and fight climate change with verified blue carbon credits. Support mangroves, salt marshes, and seagrass conservation.",
  keywords: "blue carbon, carbon credits, ocean conservation, climate change, mangroves, seagrass, salt marshes, marine biodiversity",
  openGraph: {
    title: "Blue Carbon Credits - Ocean Climate Solutions",
    description: "Protect coastal ecosystems and fight climate change with verified blue carbon credits.",
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
