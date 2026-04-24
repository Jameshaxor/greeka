import type { Metadata } from "next";
import { Playfair_Display, Outfit } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { Navigation } from "@/components/ui/Navigation";
import { BookingWidget } from "@/components/ui/BookingWidget";

import { Preloader } from "@/components/ui/Preloader";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Greeka Ranchi | Cinematic Rooftop Cafe",
  description: "An immersive, luxury Mediterranean-fusion rooftop experience in Ranchi. Dive into wood-fired pizzas, signature libations, and Mediterranean sunsets.",
  openGraph: {
    title: "Greeka Ranchi | Rooftop Elegance",
    description: "Discover Ranchi's premium Mediterranean-fusion rooftop experience.",
    url: "https://greeka-ranchi.com",
    siteName: "Greeka Ranchi",
    images: [
      {
        url: "https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2670&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Greeka Ranchi Rooftop View",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Greeka Ranchi | Rooftop Elegance",
    description: "Discover Ranchi's premium Mediterranean-fusion rooftop experience.",
    images: ["https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2670&auto=format&fit=crop"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${outfit.variable} antialiased`}
    >
      <body className="font-sans min-h-screen flex flex-col bg-background text-foreground relative z-0 selection:bg-accent selection:text-background">
        <Preloader />
        <SmoothScroll>
          <CustomCursor />
          <Navigation />
          <BookingWidget />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
