import { projects } from '@/data/ProjectData/ProjectData'
import Card from '@/utils/Card'
import React from 'react'

const Project = () => {
  return (
    <section className='section-border'>
      <div className='flex flex-row items-center justify-between pt-3 px-3 md:px-0'>
        <p className='text-muted-foreground jetbrains-mono text-xs'>[02/05]</p>
        <p className='text-muted-foreground jetbrains-mono uppercase text-xs'>Showcase</p>
        <p className='uppercase jetbrains-mono text-xs'>My Projects</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 py-8 md:py-10 px-3 md:px-0">
        {projects.map((project) => (
          <Card
            key={project.id}
            id={project.id}
            title={project.title}
            description={project.description}
            github={project.github}
            live={project.live}
          />
        ))}
      </div>
    </section>
  )
}

export default Project
