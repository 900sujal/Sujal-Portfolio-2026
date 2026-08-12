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
    <section className="px-4 py-10 sm:px-5 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Contact" title="Let's Build Something Great Together" subtitle="I&apos;m open to opportunities, collaborations and interesting projects. Reach out to start the conversation." />
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10">
          <div className="space-y-4 rounded-[1.75rem] border border-white/10 bg-slate-950/80 p-4 shadow-glow sm:p-6 lg:p-8">
            {details.map(item => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                className="group flex w-full min-w-0 items-start gap-3 rounded-2xl border border-white/10 bg-slate-900/80 px-3 py-3 text-slate-300 transition hover:border-cyan-400/30 hover:text-cyan-100 sm:gap-4 sm:px-5 sm:py-5"
              >
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-200 sm:h-12 sm:w-12 sm:rounded-3xl"><item.icon size={20} /></span>
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-cyan-300/90 sm:text-xs lg:text-sm">{item.label}</p>
                  <p className="mt-2 break-all text-sm text-slate-100 sm:text-base">{item.value}</p>
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
