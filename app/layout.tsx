import "../global.css";
import { Metadata } from "next";
import ClientLayout from "./ClientLayout";

export const metadata: Metadata = {
  title: {
    default: "Ian's Portfolio",
    template: "%s | chronark.com",
  },
  description: "Portfolio for Ian Keller and his business, Mayday Technologies",
  openGraph: {
    title: "Ian's Portfolio",
    description: "Ian's Portfolio and Business Site",
    url: "https://ian-dev-taupe.vercel.app/",
    siteName: "Ian's Portfolio",
    images: [
      {
        url: "./public/favicon.svg",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-black">
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}


// "use client";
// import "../global.css";
// // import { Analytics } from "./components/analytics";
// import { ThemeProvider } from "next-themes";
// import { Header } from "./components/Header";
// import Particles from "./components/particles";
// import { usePathname } from "next/navigation";

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const pathname = usePathname();
//   const isHome = pathname === "/";

//   return (
//     <html lang="en" suppressHydrationWarning>
//       {/* <head>
//         <Analytics />
//       </head> */}
//       <body
//         className={`bg-black ${
//           process.env.NODE_ENV === "development" ? "debug-screens" : undefined
//         }`}
//       >
//         <ThemeProvider attribute="class">
//           <div className="relative min-h-screen">
//             {/* Background container */}
//             <div className="fixed inset-0 bg-gradient-to-tl from-black via-zinc-400/25 to-black">
//               <Particles
//                 className="absolute inset-0 -z-10 animate-fade-in"
//                 quantity={450}
//                 staticity={5}
//                 ease={50}
//                 refresh={true}
//               />
//             </div>
//             <Header />
//             <main className="relative">
//               {!isHome ? (
//                 <div className="absolute inset-0 max-w-7xl mx-auto">
//                   <div className="h-full min-h-screen bg-white dark:bg-zinc-900 backdrop-blur-sm rounded-lg p-8">
//                     {children}
//                   </div>
//                 </div>
//               ) : (
//                 <div className="flex flex-col items-center justify-center min-h-screen">
//                   {children}
//                 </div>
//               )}
//             </main>
//           </div>
//         </ThemeProvider>
//       </body>
//     </html>
//   );
// }
