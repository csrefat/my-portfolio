import './globals.css';

export const metadata = {
  title: 'Md. Jannatun Naem Refat | Software Engineer Portfolio',
  description: 'Portfolio of Md. Jannatun Naem Refat - Software Engineer specializing in Front-End Development, Back-End Engineering, and IoT Automation.',
  keywords: ['Jannatun Naem Refat', 'Software Engineer', 'Next.js Portfolio', 'Full Stack Developer', 'Dhaka Bangladesh'],
  authors: [{ name: 'Md. Jannatun Naem Refat' }],
  openGraph: {
    title: 'Md. Jannatun Naem Refat | Software Engineer',
    description: 'Compiling dreams into seamless digital experiences. View projects, skills, and get in touch.',
    url: 'https://serefat-portfolio.vercel.app',
    siteName: 'Refat Portfolio',
    images: [
      {
        url: 'https://serefat-portfolio.vercel.app/profile.jpg',
        width: 800,
        height: 800,
        alt: 'Md. Jannatun Naem Refat',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Md. Jannatun Naem Refat | Software Engineer',
    description: 'Software Engineer Portfolio built with Next.js, Tailwind CSS, and Framer Motion.',
    images: ['https://serefat-portfolio.vercel.app/profile.jpg'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-slate-950 text-slate-100 antialiased selection:bg-cyan-500 selection:text-slate-950">
        {children}
      </body>
    </html>
  );
}