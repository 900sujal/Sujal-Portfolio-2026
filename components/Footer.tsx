import Link from 'next/link'
import { Github, Linkedin, Mail } from 'lucide-react'

const links = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Skills', href: '/skills' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
]

const services = [
  'MERN Stack Development',
  'React Development',
  'Node.js APIs',
  'MongoDB Design',
  'Responsive UI',
]

const technologies = ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'JavaScript']

const social = [
  { label: 'GitHub', href: 'https://github.com/900sujal', icon: Github, newTab: true },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sujal-prajapati-46651732a/', icon: Linkedin, newTab: true },
  {
    label: 'Email',
    href: 'https://mail.google.com/mail/?view=cm&fs=1&to=sujalprajapati9000@gmail.com&su=Portfolio%20Inquiry',
    icon: Mail,
    newTab: true,
  },
]

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-slate-950/95 px-5 py-16 text-slate-300 backdrop-blur-xl sm:px-6 lg:px-10">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.16),transparent_45%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-3 rounded-3xl border border-white/10 bg-slate-900/70 px-5 py-4 text-sm font-semibold text-white shadow-[0_15px_50px_rgba(15,23,42,0.25)]">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-gradient-to-br from-cyan-400 to-violet-500 text-lg font-black text-slate-950">SP</span>
            <span>Sujal Prajapati</span>
          </div>
          <p className="max-w-xl text-sm leading-7 text-slate-400">MERN Stack Developer building modern, responsive, and scalable web applications with clean UI, API-driven backend, and polished deployment workflows.</p>
          <div className="flex items-center gap-3">
            {social.map(item => {
              const Icon = item.icon
              const isExternalLink = item.newTab

              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={isExternalLink ? '_blank' : undefined}
                  rel={isExternalLink ? 'noopener noreferrer' : undefined}
                  aria-label={item.label}
                  className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-slate-900/80 text-slate-300 transition hover:border-cyan-400/30 hover:text-cyan-200"
                >
                  <Icon size={18} />
                </a>
              )
            })}
          </div>
          <p className="text-sm text-slate-500">© 2026 Sujal Prajapati. All rights reserved.</p>
        </div>

        <div>
          <h4 className="mb-5 text-sm uppercase tracking-[0.24em] text-cyan-300/90">Quick Links</h4>
          <div className="grid gap-3 text-sm text-slate-300">
            {links.map(item => (
              <Link key={item.href} href={item.href} className="transition hover:text-cyan-300">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-5 text-sm uppercase tracking-[0.24em] text-cyan-300/90">Services</h4>
          <div className="grid gap-3 text-sm text-slate-300">
            {services.map(item => (
              <p key={item} className="transition hover:text-cyan-300">{item}</p>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-5 text-sm uppercase tracking-[0.24em] text-cyan-300/90">Technologies</h4>
          <div className="grid gap-3 text-sm text-slate-300">
            {technologies.map(item => (
              <p key={item} className="transition hover:text-cyan-300">{item}</p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
