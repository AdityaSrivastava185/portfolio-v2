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
    <div className='md:h-[400px] md:w-[420px] bg-card p-4 flex flex-col items-start justify-between'>
      <div>
        <div className=' text-muted-foreground jetbrains-mono text-xs'>
          <p>/ [{String(id).padStart(2, '0')}]</p>
        </div>
        <div>
          <p className='text-foreground text-3xl font-bold jetbrains-mono uppercase pt-7'>{title}</p>
          <p className='text-sm jetbrains-mono text-muted-foreground uppercase pt-2'>{description}</p>
        </div>
      </div>
      <div>
        <div className='flex flex-row items-center gap-3'>
          <Link href={github} className='text-sm text-foreground uppercase hover:text-muted-foreground hover:underline jetbrains-mono'>
            View on github
          </Link>
          <ArrowUpRightIcon className='h-4 w-4' />
        </div>
        <div className='flex flex-row gap-3 items-center'>
          <Link href={live} className='text-sm text-foreground uppercase hover:text-muted-foreground hover:underline jetbrains-mono'>
            View on live site
          </Link>
          <ArrowUpRightIcon className='h-4 w-4' />
        </div>
      </div>
    </div>
  )
}

export default Card
