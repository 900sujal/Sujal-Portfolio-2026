'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const initialState = { name: '', email: '', subject: '', message: '' }

export function ContactForm() {
  const [form, setForm] = useState(initialState)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.subject || !form.message) {
      setStatus('error')
      return
    }
    setStatus('loading')
    await new Promise(resolve => setTimeout(resolve, 900))
    setStatus('success')
    setForm(initialState)
  }

  return (
    <motion.form initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} onSubmit={handleSubmit} className="grid gap-4 rounded-[1.75rem] border border-white/10 bg-slate-900/70 p-4 shadow-glow sm:gap-5 sm:p-6 lg:p-8">
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
        <label className="space-y-2 text-sm text-slate-300 sm:space-y-3">
          <span>Name</span>
          <input name="name" value={form.name} onChange={handleChange} className="w-full min-w-0 rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-300/70" placeholder="Your name" />
        </label>
        <label className="space-y-2 text-sm text-slate-300 sm:space-y-3">
          <span>Email</span>
          <input name="email" type="email" value={form.email} onChange={handleChange} className="w-full min-w-0 rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-300/70" placeholder="your@mail.com" />
        </label>
      </div>

      <label className="space-y-2 text-sm text-slate-300 sm:space-y-3">
        <span>Subject</span>
        <input name="subject" value={form.subject} onChange={handleChange} className="w-full min-w-0 rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-300/70" placeholder="Project scope" />
      </label>

      <label className="space-y-2 text-sm text-slate-300 sm:space-y-3">
        <span>Message</span>
        <textarea name="message" value={form.message} onChange={handleChange} rows={6} className="w-full min-w-0 rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-4 text-slate-100 outline-none transition focus:border-cyan-300/70" placeholder="Tell me about your project..."></textarea>
      </label>

      <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:brightness-110">
        {status === 'loading' ? 'Sending...' : 'Send Message'}
      </button>

      {status === 'success' && <p className="text-sm text-emerald-300">Message ready to send. Integration can be added with Formspree or Resend.</p>}
      {status === 'error' && <p className="text-sm text-rose-300">Please complete every field before sending.</p>}
    </motion.form>
  )
}
