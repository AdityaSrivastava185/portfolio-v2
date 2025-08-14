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
    <div className='md:h-[400px] md:w-[420px] p-4 flex flex-col items-start justify-between border-1 border-border'>
      <div>
        <div className='flex flex-col md:flex-row items-center justify-between text-muted-foreground jetbrains-mono text-xs'>
          <p>/[{String(id).padStart(2, '0')}]</p>
          <p className='text-chart-3 text-xs hidden md:block'>{role}</p>
        </div>
        <div>
          <p className='text-foreground text-xl md:text-3xl font-bold jetbrains-mono uppercase pt-7'>{companyName}</p>
          <p className='text-chart-3 italic md:hidden'>{role}</p>
          <p className=' text-xs md:text-sm jetbrains-mono text-muted-foreground uppercase pt-2'>{description}</p>
        </div>
      </div>
      <div className='my-7'>
        <div className='flex flex-row items-center gap-3'>
          <Link href="/" className='text-sm text-foreground uppercase hover:text-muted-foreground hover:underline jetbrains-mono'>
            checkout the project
          </Link>
          <ArrowUpRightIcon className='h-4 w-4' />
        </div>
        <div className='flex flex-row gap-3 items-center'>
          <p className='text-sm text-foreground uppercase hover:text-muted-foreground hover:underline jetbrains-mono'>
            {timeline}
          </p>
          <ArrowUpRightIcon className='h-4 w-4' />
        </div>
      </div>
    </div>
  )
}

export default ExperienceCard;
