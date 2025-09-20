import React from 'react'
import Link from 'next/link'
import { ArrowUpRightIcon } from 'lucide-react'

interface ExperienceProps {
  id: number,
  role: string,
  companyName: string,
  description: string,
  timeline: string
}

const ExperienceCard: React.FC<ExperienceProps> = ({
  id,
  role,
  companyName,
  description,
  timeline
}) => {
  return (
    <div className='w-full h-full p-4 flex flex-col items-start justify-between border border-border'>
      <div>
        <div className='flex flex-col md:flex-row items-center justify-between text-muted-foreground jetbrains-mono text-xs'>
          <p>/[{String(id).padStart(2, '0')}]</p>
          <p className='text-chart-3 text-xs hidden md:block'>{role}</p>
        </div>
        <div>
          <p className='text-foreground text-lg sm:text-xl md:text-3xl font-bold jetbrains-mono uppercase pt-5 md:pt-7'>
            {companyName}
          </p>
          <p className='text-chart-3 italic md:hidden'>{role}</p>
          <p className='text-xs md:text-sm jetbrains-mono text-muted-foreground uppercase pt-2 leading-snug'>
            {description}
          </p>
        </div>
      </div>
      <div className='mt-6 md:mt-7'>
        <div className='flex flex-row items-center gap-2 sm:gap-3'>
          <Link href="/" className='text-xs sm:text-sm text-foreground uppercase hover:text-muted-foreground hover:underline jetbrains-mono'>
            checkout the project
          </Link>
          <ArrowUpRightIcon className='h-3 w-3 sm:h-4 sm:w-4' />
        </div>
        <div className='flex flex-row gap-2 sm:gap-3 items-center mt-2'>
          <p className='text-xs sm:text-sm text-foreground uppercase hover:text-muted-foreground hover:underline jetbrains-mono'>
            {timeline}
          </p>
          <ArrowUpRightIcon className='h-3 w-3 sm:h-4 sm:w-4' />
        </div>
      </div>
    </div>
  )
}

export default ExperienceCard
