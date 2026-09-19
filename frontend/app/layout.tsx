import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from "@/components/theme-provider";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "MyselfX Developer — Next.js + FastAPI Starter Kit",
    template: "%s | MyselfX Developer",
  },
  description:
    "MyselfX Developer — a production-ready full-stack starter kit built with Next.js 14, FastAPI, PostgreSQL and Tailwind CSS. Featuring JWT auth, an admin dashboard and a polished dark/light theme.",
  authors: [{ name: "MyselfX Developer", url: "https://myselfx-platform.vercel.app" }],
  keywords: [
    "Next.js",
    "FastAPI",
    "Tailwind CSS",
    "Full-Stack",
    "MyselfX Developer",
    "Portfolio",
  ],
  metadataBase: new URL("https://myselfx-platform.vercel.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://myselfx-platform.vercel.app",
    title: "MyselfX Developer — Next.js + FastAPI Starter Kit",
    description:
      "A production-ready full-stack starter kit with Next.js 14, FastAPI, PostgreSQL and Tailwind CSS.",
    siteName: "MyselfX Developer",
  },
  twitter: {
    card: "summary_large_image",
    title: "MyselfX Developer — Next.js + FastAPI Starter Kit",
    description:
      "A production-ready full-stack starter kit with Next.js 14, FastAPI, PostgreSQL and Tailwind CSS.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
