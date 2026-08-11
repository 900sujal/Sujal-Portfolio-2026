'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Code2, Smartphone, Layers, Aperture } from 'lucide-react'
import { SectionHeading } from '@/components/SectionHeading'
import { ScrollToTop } from '@/components/ScrollToTop'

const stats = [
  { label: 'Years Experience', value: '01+' },
  { label: 'Featured Projects', value: '7+' },
  { label: 'Client Satisfaction', value: '100%' },
]

const features = [
  { title: 'Web Experiences', icon: Smartphone },
  { title: 'Mobile Interfaces', icon: Aperture },
  { title: 'API Systems', icon: Layers },
]

export default function HomePage() {
  return (
    <div className="relative overflow-hidden bg-[#07081c] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(124,58,237,0.18),transparent_20%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.14),transparent_24%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_28%)]" />
      <div className="pointer-events-none absolute left-1/2 top-16 h-80 w-80 -translate-x-1/2 rounded-full bg-violet-500/10 blur-3xl" />
      <div className="pointer-events-none absolute right-24 top-24 h-52 w-52 rounded-full border border-violet-400/20 shadow-[0_0_60px_rgba(124,58,237,0.3)]" />
      <div className="pointer-events-none absolute left-28 bottom-24 h-36 w-36 rounded-full border border-cyan-300/20 shadow-[0_0_50px_rgba(56,189,248,0.28)]" />
      <div className="pointer-events-none absolute left-10 top-1/2 h-2 w-2 rounded-full bg-white/90 shadow-[0_0_12px_rgba(255,255,255,0.9)]" />
      <section className="relative px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75 }} className="space-y-8">
              <p className="inline-flex items-center gap-2 rounded-full border border-violet-400/25 bg-violet-500/10 px-4 py-2 text-xs uppercase tracking-[0.32em] text-violet-200">MERN Stack Developer</p>
              <div className="space-y-4">
                <p className="text-sm uppercase tracking-[0.4em] text-slate-300/80">Hi, I&apos;m</p>
                <h1 className="text-6xl font-black tracking-tight text-white sm:text-7xl md:text-8xl">
                  Sujal <span className="bg-gradient-to-r from-violet-400 via-cyan-300 to-slate-100 bg-clip-text text-transparent">Praajapati</span>
                </h1>
              </div>
              <p className="max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">I build responsive full-stack applications with MongoDB, Express.js, React.js, and Node.js. I specialize in REST APIs, authentication systems, and polished user experiences for growth-driven products.</p>
              <div className="flex flex-wrap gap-4">
                <a href="/Sujal_Prajapati_MERN_Stack_Resume.pdf" download className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-6 py-4 text-sm font-semibold text-slate-950 shadow-[0_20px_60px_rgba(56,189,248,0.18)] transition duration-300 hover:brightness-110">Download Resume</a>
                <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 via-cyan-400 to-slate-100 px-6 py-4 text-sm font-semibold text-slate-950 shadow-[0_20px_60px_rgba(124,58,237,0.18)] transition duration-300 hover:brightness-105">Hire Me<ArrowRight size={18} /></Link>
                <Link href="/projects" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/80 px-6 py-4 text-sm font-semibold text-slate-100 transition duration-300 hover:border-cyan-400/30 hover:bg-slate-900/95">View Projects</Link>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {stats.map(item => (
                  <div key={item.label} className="rounded-[2rem] border border-white/10 bg-slate-950/85 p-6 shadow-glow">
                    <p className="text-3xl font-semibold text-white">{item.value}</p>
                    <p className="mt-2 text-sm text-slate-400">{item.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="relative mx-auto w-full max-w-[760px]">
              <div className="absolute -left-10 top-10 h-36 w-36 rounded-full bg-violet-100/10 blur-3xl" />
              <div className="absolute -right-10 bottom-12 h-44 w-44 rounded-full bg-cyan-400/10 blur-3xl" />
              <div className="relative overflow-hidden rounded-[2.5rem] shadow-[0_40px_120px_rgba(15,23,42,0.35)]">
                <div className="relative h-[560px] w-full">
                  <Image
                    src="/image4.png"
                    alt="Workstation desk with monitors and laptop"
                    fill
                    className="object-contain rounded-[2.5rem] object-top"
                    sizes="(max-width: 1000px) 100vw, 760px"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="px-5 pb-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Quick Intro" title="Building Ideas Into Digital Experiences" subtitle="I create premium applications that bring product vision to life with polished UX, fast performance, and thoughtful engineering." />
          <div className="grid gap-6 md:grid-cols-3">
            <motion.div whileHover={{ y: -6 }} className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-[0_30px_80px_rgba(124,58,237,0.12)] transition duration-300 hover:-translate-y-1 hover:border-violet-300/20 hover:bg-slate-900/90">
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br from-cyan-500/10 to-violet-500/10 text-cyan-200 shadow-lg shadow-cyan-500/10"><Code2 size={24} /></div>
              <h3 className="text-xl font-semibold text-white">Reliable Architecture</h3>
              <p className="mt-3 text-sm text-slate-400">Clean structure for frontend, backend, and mobile solutions.</p>
            </motion.div>
            <motion.div whileHover={{ y: -6 }} className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-[0_30px_80px_rgba(124,58,237,0.12)] transition duration-300 hover:-translate-y-1 hover:border-cyan-300/20 hover:bg-slate-900/90">
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br from-cyan-500/10 to-violet-500/10 text-cyan-200 shadow-lg shadow-cyan-500/10"><Smartphone size={24} /></div>
              <h3 className="text-xl font-semibold text-white">Responsive Design</h3>
              <p className="mt-3 text-sm text-slate-400">Interfaces that look refined on mobile, tablet, and desktop.</p>
            </motion.div>
            <motion.div whileHover={{ y: -6 }} className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-[0_30px_80px_rgba(124,58,237,0.12)] transition duration-300 hover:-translate-y-1 hover:border-cyan-300/20 hover:bg-slate-900/90">
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br from-cyan-500/10 to-violet-500/10 text-cyan-200 shadow-lg shadow-cyan-500/10"><Aperture size={24} /></div>
              <h3 className="text-xl font-semibold text-white">Fast Delivery</h3>
              <p className="mt-3 text-sm text-slate-400">Focused, efficient execution for production-ready work.</p>
            </motion.div>
          </div>
        </div>
      </section>

      <ScrollToTop />
    </div>
  )
}
