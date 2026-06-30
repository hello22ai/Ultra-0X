import { Poppins } from "next/font/google";
import "./globals.css";

// Poppins everywhere — rounded, modern. Headings var (--font-oswald) + body var (--font-inter).
const heading = Poppins({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Poppins({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Ultra X Player — Premium IPTV Streaming Player",
  description:
    "Ultra X Player — stream live TV, movies & series in 4K with EPG, catch-up, multi-profile and parental controls. Works on Android, iOS, Smart TV, Firestick & Web.",
  icons: {
    icon: "/media/logo-onlight.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${heading.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
