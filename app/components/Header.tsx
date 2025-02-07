'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()
  
  const navigation = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="fixed top-0 w-full z-50">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <nav className="flex items-center gap-8">
          {navigation.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm duration-300 ${
                  isActive 
                    ? 'text-zinc-100' 
                    : 'text-zinc-400 hover:text-zinc-100'
                }`}
              >
                {item.name}
              </Link>
            )
          })}
        </nav>
        {/* <ThemeSwitch /> */}
      </div>
    </header>
  )
}