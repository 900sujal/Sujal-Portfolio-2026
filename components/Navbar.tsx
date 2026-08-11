'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowRight } from 'lucide-react'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Skills', href: '/skills' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
]

export function Navbar() {
  const pathname = usePathname()
  const [scrollY, setScrollY] = useState(0)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrollY > 15 ? 'border-b border-white/10 bg-slate-950/80 shadow-black/30' : 'bg-transparent'} `}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="group inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-900/60 px-4 py-3 text-sm font-semibold text-slate-100 shadow-lg shadow-[#0f172a]/40 transition hover:border-cyan-400/30 hover:text-cyan-100">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 text-lg font-black text-cyan-300 shadow-[0_20px_60px_rgba(34,211,238,0.18)] transition group-hover:scale-[1.03]">
            SP
          </span>
          <span className="hidden sm:inline">Sujal Prajapati</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map(item => {
            const isActive = pathname === item.href
            return (
              <Link key={item.href} href={item.href} className={`group relative text-sm font-medium transition ${isActive ? 'text-cyan-100' : 'text-slate-300 hover:text-cyan-100'}`}>
                {item.label}
                <span className={`absolute left-0 -bottom-1 h-0.5 w-full bg-cyan-400 transition-transform duration-300 ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
              </Link>
            )
          })}
        </nav>

        <button onClick={() => setOpen(!open)} aria-label="Toggle menu" className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-slate-900/70 text-slate-200 transition hover:border-cyan-400/30 hover:text-cyan-100 md:hidden">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="border-t border-white/10 bg-slate-950/95 py-4 backdrop-blur-md md:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5">
              {navItems.map(item => (
                <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-base font-medium text-slate-100 transition hover:border-cyan-400/30 hover:text-cyan-100">
                  {item.label}
                </Link>
              ))}
              <motion.div className="mt-3 flex items-center justify-between rounded-2xl border border-cyan-400/10 bg-slate-900/70 px-4 py-3 text-sm text-slate-300" whileHover={{ y: -2 }}>
                <span>Ready for your next project?</span>
                <ArrowRight size={18} />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
