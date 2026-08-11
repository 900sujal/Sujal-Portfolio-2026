'use client'

import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/SectionHeading'
import { SkillCard } from '@/components/SkillCard'
import { skills } from '@/data/skills'

const categories = ['All', 'Frontend', 'Backend', 'Database', 'Mobile', 'Tools']

export default function SkillsPage() {
  return (
    <section className="relative overflow-hidden px-5 py-20 lg:px-8">
      <div className="pointer-events-none absolute left-0 top-0 h-72 w-72 rounded-full bg-violet-400/10 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-24 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="My MERN Skills" title="Expertise Across the Stack" subtitle="A curated dashboard of the technologies and tools I use to ship modern web and mobile applications." />

        <div className="mb-12 flex flex-wrap items-center gap-3">
          {categories.map(category => (
            <button key={category} className="rounded-full border border-white/10 bg-slate-900/80 px-5 py-2 text-sm text-slate-200 transition hover:border-cyan-400/30 hover:text-cyan-300">
              {category}
            </button>
          ))}
        </div>

        <div className="grid gap-8">
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map(skill => (
              <SkillCard key={skill.skill} skill={skill.skill} category={skill.category} description={skill.description} icon={skill.icon} level={skill.level} />
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="rounded-[2.5rem] border border-white/10 bg-slate-950/90 p-8 shadow-[0_40px_120px_rgba(15,23,42,0.55)]">
            <h3 className="text-xl font-semibold text-slate-100">Skill progress overview</h3>
            <p className="mt-4 text-sm leading-7 text-slate-400">These bars show core expertise areas across the stack, from frontend frameworks to backend services and developer tooling.</p>
            <div className="mt-8 space-y-5">
              {skills.map(skill => (
                <div key={skill.skill} className="rounded-3xl border border-white/10 bg-slate-900/80 p-4">
                  <div className="flex items-center justify-between gap-4 text-sm text-slate-200">
                    <span>{skill.skill}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="mt-3 h-3 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-violet-500 to-fuchsia-400" style={{ width: `${skill.level}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
