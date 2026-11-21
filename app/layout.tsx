import type { Metadata } from "next";
import "@fontsource-variable/bricolage-grotesque";
import "@fontsource/ibm-plex-sans/400.css";
import "@fontsource/ibm-plex-sans/500.css";
import "@fontsource/ibm-plex-sans/600.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Syed Shaheer Ahmed | Full-Stack MERN Developer",
  description:
    "Full-stack MERN developer in Karachi building secure, real-time web apps with React, Next.js, Node.js, Express, and MongoDB.",
  openGraph: {
    title: "Syed Shaheer Ahmed | Full-Stack MERN Developer",
    description:
      "Secure, real-time web apps with React, Next.js, Node.js, Express, and MongoDB.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
