import "@/app/styles/globals.css";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Footer from "./components/global/Footer";
import Navbar from "./components/global/Navbar";
import { gitlabmono, incognito } from "./font/font";
import { Providers } from "./providers";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--inter",
});

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#eeeeee' },
    { media: '(prefers-color-scheme: dark)', color: '#181818' },
  ],
}

const options = {
  title: "Cojocaru David - Portfolio",
  description:
    "Explore my impressive portfolio as I, David Cojocaru, a passionate Full Stack Developer from Romania, showcase my dedication to web development and continuous learning. Dive into the innovative projects that reflect not just my expertise but also my commitment to growth and creating remarkable web solutions.",
  url: "https://cojocarudavid.me",
  ogImage:
    "https://res.cloudinary.com/dwrrey9e3/image/upload/v1706307105/ogimage.png",
};

export const metadata: Metadata = {
  title: options.title,
  metadataBase: new URL(options.url),
  description: options.description,
  manifest: "/manifest.json",
  keywords: ["David Cojocaru", "Full Stack Developer", "Web Developer", "Next.js", "Tailwind CSS", "Laravel", "PHP", "HTML", "CSS", "JavaScript", "Node.js", "MySQL", "MongoDB", "Tailwind UI", "Romania", "Bucharest"],
  openGraph: {
    title: options.title,
    url: options.url,
    siteName: "Cojocaru David - Portfolio",
    locale: "en-US",
    type: "website",
    description: options.description,
    images: options.ogImage,
  },
  alternates: {
    canonical: options.url,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${incognito.variable} ${inter.className} ${gitlabmono.variable} dark:bg-zinc-900 bg-white dark:text-white text-zinc-700`}
      >
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <Providers>
          <Navbar />
          <section className="flex flex-col items-center justify-center min-h-screen">
            {children}
          </section>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
