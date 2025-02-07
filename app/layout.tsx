'use client'
import "../global.css";
// import { Analytics } from "./components/analytics";
import { ThemeProvider } from "next-themes";
import { Header } from "./components/Header";
import Particles from "./components/particles";
import { usePathname } from 'next/navigation'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname()
  const isHome = pathname === '/'

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
          <div className="relative min-h-screen">
            {/* Background container */}
            <div className="fixed inset-0 bg-gradient-to-tl from-black via-zinc-400/25 to-black">
              <Particles
                className="absolute inset-0 -z-10 animate-fade-in"
                quantity={250}
                staticity={10}
                ease={10}
              />
            </div>
            
            {/* Content container with background starting from top */}
            <div className="relative">
              {!isHome ? (
                <div className="absolute inset-0 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                  <div className="mx-4 sm:mx-8 h-full min-h-screen dark:bg-zinc-900 bg-white backdrop-blur-sm rounded-lg" />
                </div>
              ) : null}
              
              <Header />
              
              <main className="relative">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                  <div className="mx-4 sm:mx-8">
                    <div className="mx-auto max-w-6xl">
                      <div className="p-8">
                        {children}
                      </div>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}