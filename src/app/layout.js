import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

// Site configuration
const siteConfig = {
  name: "Ayan Pathan",
  title: "Ayan Pathan | Full Stack Developer (React, Next.js, Node.js)",
  description:
    "Ayan Pathan is a Full Stack Developer from Mumbai, India. I build web and mobile apps with React, Next.js, React Native and Node.js.",
  url: "https://ayanpathan.me",
  links: {
    github: "https://github.com/AyanPathan47",
    linkedin: "https://www.linkedin.com/in/ayannpathan/",
  },
};

export const viewport = {
  themeColor: "#09090b",
  colorScheme: "dark",
};

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "Ayan Pathan",
    "Ayan Pathan Developer",
    "Ayan Pathan Full Stack Developer",
    "Full Stack Developer",
    "Full Stack Developer Mumbai",
    "React Developer",
    "Next.js Developer",
    "React Native Developer",
    "Node.js Developer",
    "MERN Stack Developer",
    "Portfolio",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,

  // One canonical URL, so ayanpathan.me / www / trailing variants consolidate
  alternates: { canonical: "/" },

  icons: { icon: "/favicon.ico" },
  manifest: "/site.webmanifest",

  // Open Graph / Twitter images come from app/opengraph-image.js and app/twitter-image.js
  openGraph: {
    type: "profile",
    locale: "en_IN",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    firstName: "Ayan",
    lastName: "Pathan",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Set NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION (Search Console "HTML tag" code) to enable.
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },

  category: "technology",
};

// JSON-LD Structured Data: Person + WebSite + ProfilePage, linked by @id
const personId = `${siteConfig.url}/#person`;
const websiteId = `${siteConfig.url}/#website`;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": personId,
      name: siteConfig.name,
      givenName: "Ayan",
      familyName: "Pathan",
      url: siteConfig.url,
      jobTitle: "Full Stack Developer",
      description: siteConfig.description,
      worksFor: { "@type": "Organization", name: "Rentkar" },
      alumniOf: [
        { "@type": "CollegeOrUniversity", name: "University of Mumbai" },
        { "@type": "CollegeOrUniversity", name: "Guru Nanak Khalsa College, Mumbai" },
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Mumbai",
        addressRegion: "Maharashtra",
        addressCountry: "IN",
      },
      sameAs: [siteConfig.links.github, siteConfig.links.linkedin],
      knowsAbout: [
        "Full Stack Development",
        "React",
        "Next.js",
        "React Native",
        "Node.js",
        "Express.js",
        "TypeScript",
        "MongoDB",
        "PostgreSQL",
        "Redis",
        "REST APIs",
        "AWS",
        "Docker",
      ],
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: siteConfig.url,
      name: `${siteConfig.name} | Portfolio`,
      inLanguage: "en-IN",
      publisher: { "@id": personId },
    },
    {
      "@type": "ProfilePage",
      "@id": `${siteConfig.url}/#profilepage`,
      url: siteConfig.url,
      name: siteConfig.title,
      inLanguage: "en-IN",
      isPartOf: { "@id": websiteId },
      mainEntity: { "@id": personId },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN" className="dark">
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-[#09090b] text-[#fafafa] font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
