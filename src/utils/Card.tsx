import { ArrowUpRightIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

interface CardProps {
  id: number;
  title: string;
  description: string;
  github: string;
  live: string;
}

const Card: React.FC<CardProps> = ({ id, title, description, github, live }) => {
  return (
    <div className='w-full h-full bg-card p-4 flex flex-col items-start justify-between rounded-2xl shadow-sm hover:shadow-md transition'>
      <div>
        <div className='text-muted-foreground jetbrains-mono text-xs'>
          <p>/ [{String(id).padStart(2, '0')}]</p>
        </div>
        <div>
          <p className='text-foreground text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold jetbrains-mono uppercase pt-3 md:pt-6'>
            {title}
          </p>
          <p className='text-xs sm:text-sm md:text-base jetbrains-mono text-muted-foreground uppercase pt-2 leading-snug'>
            {description}
          </p>
        </div>
      </div>
      <div className='mt-6 sm:mt-8'>
        <div className='flex flex-row items-center gap-2 sm:gap-3'>
          <Link
            href={github}
            className='text-xs sm:text-sm text-foreground uppercase hover:text-muted-foreground hover:underline jetbrains-mono'
          >
            View on github
          </Link>
          <ArrowUpRightIcon className='h-3 w-3 sm:h-4 sm:w-4' />
        </div>
        <div className='flex flex-row gap-2 sm:gap-3 items-center mt-2'>
          <Link
            href={live}
            className='text-xs sm:text-sm text-foreground uppercase hover:text-muted-foreground hover:underline jetbrains-mono'
          >
            View live site
          </Link>
          <ArrowUpRightIcon className='h-3 w-3 sm:h-4 sm:w-4' />
        </div>
      </div>
    </div>
  )
}

export default Card
