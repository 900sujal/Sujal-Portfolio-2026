'use client'

import { motion } from 'framer-motion'
import { Layers, Code2, PhoneIncoming, Database } from 'lucide-react'
import { SectionHeading } from '@/components/SectionHeading'

const cards = [
  { title: 'Frontend Development', description: 'Modern interfaces with React, Next.js and Tailwind for polished usability.', icon: Code2 },
  { title: 'Backend Development', description: 'API design, authentication and service orchestration with Node.js.', icon: Database },
  { title: 'Mobile App Development', description: 'Cross-platform mobile flows, responsive layouts, and smooth interactions.', icon: PhoneIncoming },
  { title: 'Database Integration', description: 'Data models and integrations built for scale and reliability.', icon: Layers },
]

export default function AboutPage() {
  return (
    <section className="px-5 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="About Me" title="Sujal Prajapati" subtitle="I deliver scalable web and mobile solutions using a modern stack, with clear product thinking and strong attention to detail." />
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} className="space-y-8">
            <div className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-glow">
              <p className="text-sm uppercase tracking-[0.2em] text-cyan-300/90">Who I Am</p>
              <h2 className="mt-4 text-3xl font-semibold text-slate-100">Full Stack Web & Mobile App Developer</h2>
              <p className="mt-5 text-base leading-8 text-slate-400">I help founders and teams build refined digital products that balance performance, usability, and scalability. My work is driven by clean code, smart architecture, and polished UI design.</p>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-glow">
              <p className="text-sm uppercase tracking-[0.2em] text-cyan-300/90">What I Do</p>
              <ul className="mt-6 space-y-4 text-slate-300">
                <li>• Build responsive web applications with React and Next.js</li>
                <li>• Develop backend APIs using Node.js and Express</li>
                <li>• Create mobile experiences with Flutter and Dart</li>
                <li>• Connect databases, auth, and integration services</li>
              </ul>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-glow">
            <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-slate-900/90 via-slate-950/90 to-slate-900/95 p-6">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.12),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.1),transparent_18%)]" />
              <div className="relative flex h-full flex-col items-center justify-center rounded-[1.75rem] border border-white/10 bg-slate-950/95 p-8 text-center text-slate-100">
                <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-[1.75rem] bg-slate-900 text-cyan-300 shadow-lg shadow-cyan-300/10">SP</div>
                <p className="text-sm uppercase tracking-[0.24em] text-cyan-300/85">Development Approach</p>
                <h3 className="mt-5 text-2xl font-semibold">Structured, scalable, and design-driven.</h3>
                <p className="mt-4 text-sm leading-7 text-slate-400">I combine strategic planning with a polished frontend to deliver products that users love and teams can maintain.</p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {cards.map(card => (
            <motion.div key={card.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} whileHover={{ y: -5 }} className="rounded-3xl border border-white/10 bg-slate-950/80 p-6 shadow-glow transition duration-300">
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-cyan-500/10 text-cyan-200">
                <card.icon size={22} />
              </div>
              <h3 className="text-lg font-semibold text-slate-100">{card.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
