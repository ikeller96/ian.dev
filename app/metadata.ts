import { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    default: "Ian's Portfolio",
    template: "%s | chronark.com",
  },
  description: "Portfolio for Ian Keller and his business, Mayday Technologies",
  openGraph: {
    title: "Ian's Portfolio",
    description: "Ian's Portfolio and Business Site",
    url: "https://chronark.com",
    siteName: "Ian's Portfolio",
    images: [
      {
        url: "https://chronark.com/og.png",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
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
  twitter: {
    title: "Ian's Portfolio",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.svg",
  },
} 