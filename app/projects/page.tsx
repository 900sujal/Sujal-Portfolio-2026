'use client'

import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/SectionHeading'
import { ProjectCard } from '@/components/ProjectCard'
import { projects } from '@/data/projects'

export default function ProjectsPage() {
  return (
    <section className="px-5 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Projects" title="Selected Work" subtitle="Showcasing web and mobile applications built with modern architecture, user experience, and API integrations." />
        <div className="grid gap-8 lg:grid-cols-3">
          {projects.map(project => (
            <ProjectCard key={project.title} title={project.title} description={project.description} tech={project.tech} image={project.image} tags={project.tech} />
          ))}
        </div>
      </div>
    </section>
  )
}
