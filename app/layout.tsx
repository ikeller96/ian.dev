"use client";
import "../global.css";
// import { Analytics } from "./components/analytics";
import { ThemeProvider } from "next-themes";
import { Header } from "./components/Header";
import Particles from "./components/particles";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isHome = pathname === "/";

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
            <Header />
            <main className="relative">
              {!isHome ? (
                <div className="absolute inset-0 max-w-7xl mx-auto">
                  <div className="h-full min-h-screen bg-zinc-900/80 backdrop-blur-sm rounded-lg" />
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center min-h-screen">
                  {children}
                </div>
              )}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
