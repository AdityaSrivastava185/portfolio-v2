import { ExperienceData } from '@/data/ExperienceData/ExperienceData'
import ExperienceCard from '@/utils/ExperienceCard'
import React from 'react'

const Experience = () => {
    return (
        <section className='section-border'>
            <div className='flex flex-row items-center justify-between pt-3 border-border'>
                <p className='text-muted-foreground jetbrains-mono text-xs'>[03/05]</p>
                <p className='text-muted-foreground jetbrains-mono uppercase text-xs md:max-w-2xl'>Implementation Skills</p>
                <p className='uppercase jetbrains-mono text-xs'>Experience</p>
            </div>
            <div className='max-w-3xl mx-auto'>
                {
                    ExperienceData.map((experience) => (
                        <ExperienceCard
                            key={experience.id}
                            id={experience.id}
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
