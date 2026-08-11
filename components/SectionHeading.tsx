'use client'

import { motion } from 'framer-motion'

interface SectionHeadingProps {
  eyebrow: string
  title: string
  subtitle?: string
}

export function SectionHeading({ eyebrow, title, subtitle }: SectionHeadingProps) {
  return (
    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} className="mb-10 max-w-3xl">
      <p className="mb-3 text-sm uppercase tracking-[0.24em] text-cyan-300/90">{eyebrow}</p>
      <h2 className="text-3xl font-semibold text-slate-100 sm:text-4xl">{title}</h2>
      {subtitle ? <p className="mt-4 max-w-2xl text-base leading-7 text-slate-400">{subtitle}</p> : null}
    </motion.div>
  )
}
