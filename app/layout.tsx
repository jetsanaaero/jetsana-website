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
  title: "Jetsana | Aircraft Detailing Services in India | Kochi, Mumbai & Bangalore",
  description:
    "India's first specialized aircraft detailing service. Premium aircraft interior cabin care, aircraft exterior detailing, and ceramic coating for private jets, charter planes, and helicopters. Based in Kochi, serving Mumbai, Bangalore & all of India.",
  keywords: [
    "aircraft detailing",
    "private jet detailing",
    "aircraft cabin care",
    "aviation detailing India",
    "aircraft ceramic coating",
    "Kochi aircraft detailing",
    "Mumbai aircraft detailing",
    "Bangalore aircraft detailing",
  ],
  openGraph: {
    title: "Jetsana | Aircraft Detailing Services in India",
    description:
      "India's first specialized aircraft detailing service. Based in Kochi, serving Mumbai, Bangalore & beyond.",
    type: "website",
    locale: "en_IN",
    siteName: "JetSana",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jetsana | Aircraft Detailing Services in India",
    description:
      "India's first specialized aircraft detailing service. Based in Kochi, serving Mumbai, Bangalore & beyond.",
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
        <meta name="p:domain_verify" content="bb16e9d3a315725f07c49225aba2d723"/>
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
                addressRegion: "Kerala",
                addressLocality: "Kochi",
                addressCountry: "IN",
              },
              areaServed: [
                { "@type": "Airport", name: "Cochin International Airport", iataCode: "COK" },
                { "@type": "Airport", name: "Chhatrapati Shivaji Maharaj International Airport", iataCode: "BOM" },
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
