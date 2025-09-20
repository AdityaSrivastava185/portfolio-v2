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
            <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 py-10 px-3 md:px-0'>
                {ExperienceData.map((experience) => (
                    <ExperienceCard
                        key={experience.id}
                        id={experience.id}
                        role={experience.role}
                        companyName={experience.companyName}
                        description={experience.description}
                        timeline={experience.timeline}
                    />
                ))}
            </div>
        </section>
    )
}

export default Experience
