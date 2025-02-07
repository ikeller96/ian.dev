import "../global.css";
import { Metadata } from "next";
// import { Analytics } from "./components/analytics";
import { ThemeProvider } from "next-themes";
import Header from "./components/Header";

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
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* <head>
        <Analytics />
      </head> */}
      <body
        className={`bg-black ${
          process.env.NODE_ENV === "development" ? "debug-screens" : undefined
        }`}
      >
        <ThemeProvider attribute="class">
          <Header />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}

// import "./globals.css"
// import type { Metadata } from "next"
// import { Inter } from "next/font/google"
// import type React from "react" // Import React

// const inter = Inter({ subsets: ["latin"] })

// export const metadata: Metadata = {
//   title: "Your Name - Portfolio",
//   description: "Personal portfolio showcasing my projects and skills",
// }

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en" className="h-full bg-gray-900">
//       <body className={`${inter.className} h-full`}>{children}</body>
//     </html>
//   )
// }
