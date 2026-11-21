import type { Metadata } from "next";
import "@fontsource-variable/bricolage-grotesque";
import "@fontsource/ibm-plex-sans/400.css";
import "@fontsource/ibm-plex-sans/500.css";
import "@fontsource/ibm-plex-sans/600.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://shaheer-portfolio-sage.vercel.app"),
  title: "Syed Shaheer Ahmed | Full-Stack MERN Developer",
  description:
    "Full-stack MERN developer in Karachi building secure, real-time web apps with React, Next.js, Node.js, Express, and MongoDB.",
  openGraph: {
    title: "Syed Shaheer Ahmed | Full-Stack MERN Developer",
    description: "Secure, real-time web apps with React, Next.js, Node.js, Express, and MongoDB.",
    type: "website",
    url: "https://shaheer-portfolio-sage.vercel.app",
  },
};

// Runs before the page paints, so the saved theme shows without a flash.
const themeScript = `(function(){var d=document.documentElement;d.classList.add('js');try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches))d.classList.add('dark');}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-screen" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
