import type { Metadata } from "next";
import { Inter, Jaldi, Iceland } from "next/font/google";
import "./globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jaldi = Jaldi({
  variable: "--font-jaldi",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const iceland = Iceland({
  variable: "--font-iceland",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Ayush Ramteke - Portfolio",
  description: "Full stack web developer and Programmer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jaldi.variable} ${iceland.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
