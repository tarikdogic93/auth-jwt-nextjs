import type { Metadata } from "next";
import './globals.css';

import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Auth JWT Next.js",
  description: "App JWT using Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <main className="min-h-screen p-8">{children}</main>
      </body>
    </html>
  );
}
