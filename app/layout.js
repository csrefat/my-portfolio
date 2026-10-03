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

export const metadata = {
  title: "MD. JANNATUN NAEM REFAT | Software Engineer & Web Developer",
  description: "Official portfolio of MD. JANNATUN NAEM REFAT (csrefat). Software Engineer specializing in Next.js, React, and Web Development.",
  keywords: ["MD. JANNATUN NAEM REFAT", "csrefat", "Refat Portfolio", "Software Engineer Bangladesh"],
  authors: [{ name: "MD. JANNATUN NAEM REFAT" }],
  verification: {
    google: "ECDyucc-2cwNfGKvIRAekogIzp0d9tlBOcb2L0zD80g",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      >
        {children}
      </body>
    </html>
  );
}