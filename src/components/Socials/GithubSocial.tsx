import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { GithubSocials } from '@/data/PortfolioData/Data'

const GithubSocial = () => {
    return (
        <div>
            <div className='bg-foreground p-1 rounded-md '>
                <div className=''>
                    <Link href={GithubSocials.GithubLinkReference} target='_blank'>
                        <svg
                            width={20}
                            height={20}
                            viewBox="0 0 24 24"
                            fill="black"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-label="GitHub"
                        >
                            <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.48 2.87 8.28 6.84 9.63.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05 .89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.74-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.04A9.38 9.38 0 0 1 12 6.84c.85.004 1.71.12 2.51.35 1.91-1.32 2.75-1.04 2.75-1.04.55 1.4.2 2.44.1 2.7.64.71 1.03 1.62 1.03 2.74 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48C19.13 20.54 22 16.74 22 12.26 22 6.58 17.52 2 12 2z"/>
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default GithubSocial
