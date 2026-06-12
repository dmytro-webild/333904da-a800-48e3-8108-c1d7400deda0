import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Manrope } from "next/font/google";
import { DM_Sans } from "next/font/google";



export const metadata: Metadata = {
  title: 'Lassi Bliss | Authentic Fresh Lassi & Beverages',
  description: 'Experience premium, handcrafted lassi made from local, fresh ingredients. Visit our shop or order online for a taste of authentic refreshment.',
  openGraph: {
    "title": "Lassi Bliss | Authentic Fresh Lassi & Beverages",
    "description": "Experience premium, handcrafted lassi made from local, fresh ingredients. Visit our shop or order online for a taste of authentic refreshment.",
    "url": "https://www.lassibliss.com",
    "siteName": "Lassi Bliss",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/beautiful-young-tattooed-person_23-2149563243.jpg",
        "alt": "Delicious mango lassi with fresh ingredients"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Lassi Bliss | Authentic Fresh Lassi & Beverages",
    "description": "Experience premium, handcrafted lassi made from local, fresh ingredients. Visit our shop or order online for a taste of authentic refreshment.",
    "images": [
      "http://img.b2bpic.net/free-photo/beautiful-young-tattooed-person_23-2149563243.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});
const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${manrope.variable} ${dmSans.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
