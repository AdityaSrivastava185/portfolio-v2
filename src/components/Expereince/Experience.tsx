import { ExperienceData } from '@/data/ExperienceData/ExperienceData'
import ExperienceCard from '@/utils/ExperienceCard'
import React from 'react'

const Experience = () => {
    return (
        <section className='section-border'>
            <div className='flex flex-row items-center justify-between pt-3 border-border px-3 md:px-0'>
                <p className='text-muted-foreground jetbrains-mono text-xs'>[03/05]</p>
                <p className='text-muted-foreground jetbrains-mono uppercase text-xs md:max-w-2xl'>Companies</p>
                <p className='uppercase jetbrains-mono text-xs'>Experience</p>
            </div>
            <div className='flex flex-col md:flex-row items-center md:py-10 flex-wrap md:ml-3 py-10 px-3 md:px-0'>
                {
                    ExperienceData.map((experience) => (
                        <ExperienceCard
                            key={experience.id}
                            id={experience.id}
                            role={experience.role}
                            companyName={experience.companyName}
                            description={experience.description}
                            timeline={experience.timeline}
                        />
                    ))
                }
            </div>
        </section>
    )
}

export default Experience
