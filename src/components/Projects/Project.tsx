
import { projects } from '@/data/ProjectData/ProjectData'
import Card from '@/utils/Card'
import React from 'react'

const Project = () => {
    return (
        <section className='section-border'>
            <div className='flex flex-row items-center justify-between pt-3'>
                <p className='text-muted-foreground jetbrains-mono text-xs'>[02/05]</p>
                <p className='text-muted-foreground jetbrains-mono uppercase text-xs'>Showcase</p>
                <p className='uppercase jetbrains-mono text-xs'>My Projects</p>
            </div>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 md:pt-20 md:pb-10 py-10 md:py-10 gap-6">
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
