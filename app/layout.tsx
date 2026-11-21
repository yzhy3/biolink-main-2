import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ToastStack } from "@/components/ui/toast-stack";
import "./globals.css";
import "./landing.css";
import "../components/landing-page/bits/bits.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Biolink — Your identity, beautifully connected",
  description: "Create a personalized bio link with social profiles, badges, music player, live widgets and custom profile decorations.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://picsum.photos" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="anonymous" />
          <link
            href="https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,400;0,500;0,600;0,700;0,900;1,400;1,700&family=Fragment+Mono&family=Luckiest+Guy&family=Montserrat:wght@300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://api.fontshare.com/v2/css?f[]=satoshi@300,400,500,700,900&f[]=onest@400,500,600,700&display=swap"
            rel="stylesheet"
          />
      </head>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <ToastStack />
        {children}
      </body>
    </html>
  );
}