import { Mail, Phone, Linkedin, Github } from 'lucide-react'
import { SectionHeading } from '@/components/SectionHeading'
import { ContactForm } from '@/components/ContactForm'

const details = [
  { label: 'Email', value: 'sujalprajapati9000@gmail.com', icon: Mail, href: 'mailto:sujalprajapati9000@gmail.com' },
  { label: 'Phone', value: '+91 9009058225', icon: Phone, href: 'tel:+919009058225' },
  { label: 'LinkedIn', value: 'https://www.linkedin.com/in/sujal-prajapati-46651732a/', icon: Linkedin, href: '#' },
  { label: 'GitHub', value: 'https://github.com/900sujal', icon: Github, href: '#' },
]

export default function ContactPage() {
  return (
    <section className="px-5 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Contact" title="Let's Build Something Great Together" subtitle="I&apos;m open to opportunities, collaborations and interesting projects. Reach out to start the conversation." />
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-6 rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-glow">
            {details.map(item => (
              <a key={item.label} href={item.href} className="group flex items-center gap-4 rounded-3xl border border-white/10 bg-slate-900/80 px-5 py-5 text-slate-300 transition hover:border-cyan-400/30 hover:text-cyan-100">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-cyan-500/10 text-cyan-200"><item.icon size={20} /></span>
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-cyan-300/90">{item.label}</p>
                  <p className="mt-2 text-base text-slate-100">{item.value}</p>
                </div>
              </a>
            ))}
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
