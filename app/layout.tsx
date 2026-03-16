import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import LoadingScreen from "@/components/ui/LoadingScreen";
import CustomCursor from "@/components/ui/CustomCursor";

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jetsana.com"),
  title: "JetSana | Aircraft Detailing Specialists | Mumbai, India",
  description:
    "India's first specialized aircraft detailing service. Premium interior cabin care, exterior detailing, and ceramic coating for private jets, charter planes, and helicopters. Based in Mumbai, serving India.",
  keywords: [
    "aircraft detailing",
    "private jet detailing",
    "aircraft cabin care",
    "aviation detailing India",
    "aircraft ceramic coating",
    "Mumbai aircraft detailing",
  ],
  openGraph: {
    title: "JetSana | Aircraft Detailing Specialists",
    description:
      "India's first specialized aircraft detailing service. Cabin perfection, delivered.",
    type: "website",
    locale: "en_IN",
    siteName: "JetSana",
  },
  twitter: {
    card: "summary_large_image",
    title: "JetSana | Aircraft Detailing Specialists",
    description:
      "India's first specialized aircraft detailing service. Cabin perfection, delivered.",
  },
};
import Script from "next/script";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
	{/* Google tag (gtag.js) */}
<Script
  src="https://www.googletagmanager.com/gtag/js?id=G-0TBF8LJ1L5"
  strategy="afterInteractive"
/>

<Script id="google-analytics" strategy="afterInteractive">
{`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-0TBF8LJ1L5');
`}
</Script>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "JetSana",
              description:
                "India's first specialized aircraft detailing service",
              url: "https://jetsana.com",
              telephone: "+91-94005-80020",
              email: "hello@jetsana.com",
              address: {
                "@type": "PostalAddress",
                addressRegion: "Maharashtra",
                addressLocality: "Mumbai",
                addressCountry: "IN",
              },
              areaServed: [
                { "@type": "Airport", name: "Chhatrapati Shivaji Maharaj International Airport", iataCode: "BOM" },
                { "@type": "Airport", name: "Cochin International Airport", iataCode: "COK" },
                { "@type": "Airport", name: "Kempegowda International Airport", iataCode: "BLR" },
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${cormorant.variable} ${montserrat.variable} antialiased bg-midnight-navy text-white font-body`}
      >
        <LoadingScreen />
        <CustomCursor />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
