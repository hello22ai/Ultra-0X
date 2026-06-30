import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

// Modern geometric grotesque for headings (mapped to --font-oswald used in CSS).
const heading = Space_Grotesk({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Ultra X Player — Premium IPTV Streaming Player",
  description:
    "Ultra X Player — stream live TV, movies & series in 4K with EPG, catch-up, multi-profile and parental controls. Works on Android, iOS, Smart TV, Firestick & Web.",
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${heading.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
