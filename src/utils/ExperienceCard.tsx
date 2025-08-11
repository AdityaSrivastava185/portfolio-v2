import React from 'react'

interface ExperienceProps {
  id: number,
  companyName: string,
  description: string,
  timeline: string
}

const ExperienceCard: React.FC<ExperienceProps> = ({
  id,
  companyName,
  description,
  timeline
}) => {
  return (
    <div>

      <div className='md:my-20 my-10'>
        <div className='flex flex-col md:flex-row md:items-center justify-between'>
          <div>
            <h2 className='font-bold text-2xl jetbrains-mono uppercase '>{companyName}</h2>
            <p className='italic text-muted-foreground '>Frontend Developer</p>
          </div>
          <p>{timeline}</p>
        </div>
        <div>
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default ExperienceCard;
