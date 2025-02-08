'use client';
import { ThemeProvider } from "next-themes";
import { Header } from "./components/Header";
import Particles from "./components/particles";
import { usePathname } from "next/navigation";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <ThemeProvider attribute="class">
      <div className="relative min-h-screen">
        <div className="fixed inset-0 bg-gradient-to-tl from-black via-zinc-400/30 to-black">
          <Particles
            className="absolute inset-0 -z-10 animate-fade-in"
            quantity={450}
            staticity={5}
            ease={50}
          />
        </div>
        <Header />
        <main className="relative">
          {!isHome ? (
            <div className="absolute inset-0 max-w-7xl mx-auto">
              <div className="h-full min-h-screen bg-white dark:bg-zinc-900 backdrop-blur-sm rounded-lg p-8">
                {children}
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center min-h-screen">
              {children}
            </div>
          )}
        </main>
      </div>
    </ThemeProvider>
  );
} 