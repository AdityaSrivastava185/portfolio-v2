import { LinkedinSocials } from '@/data/PortfolioData/Data'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const LinkedinSocial = () => {
  return (
    <div className='bg-foreground p-1 rounded-md '>
      <Link href={LinkedinSocials.LinkedinLinkReference} target='_blank'>
        <svg
          width={20}
          height={20}
          viewBox="0 0 24 24"
          fill="#0077B5"
          xmlns="http://www.w3.org/2000/svg"
          style={{ display: 'block' }}
        >
          <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.966 0-1.75-.79-1.75-1.76 0-.97.784-1.76 1.75-1.76s1.75.79 1.75 1.76c0 .97-.784 1.76-1.75 1.76zm13.5 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59v5.61z" />
        </svg>
      </Link>
    </div>
  )
}

export default LinkedinSocial
