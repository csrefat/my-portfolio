import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://serefat-portfolio.vercel.app"),
  title: "Md. Jannatun Naem Refat | Software Engineer",
  description:
    "Software Engineer & CSE Student at ULAB. Specialized in building scalable full-stack web applications, robust backend systems, and clean interfaces.",
  keywords: [
    "Md. Jannatun Naem Refat",
    "Software Engineer",
    "ULAB",
    "Full-Stack Developer",
    "Next.js Portfolio",
    "Backend Developer Bangladesh"
  ],
  authors: [{ name: "Md. Jannatun Naem Refat" }],
  openGraph: {
    title: "Md. Jannatun Naem Refat | Software Engineer Portfolio",
    description:
      "Specialized in designing scalable full-stack web applications, robust backend systems, and high-performance software engineering.",
    url: "https://serefat-portfolio.vercel.app",
    siteName: "Refat DevCard Portfolio",
    images: [
      {
        url: "/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Md. Jannatun Naem Refat - Portfolio Preview"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Md. Jannatun Naem Refat | Software Engineer",
    description:
      "Specialized in building scalable full-stack web apps, robust backend APIs, and system optimization.",
    images: ["/profile.jpg"]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}