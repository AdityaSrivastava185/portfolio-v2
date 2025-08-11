import { TwitterSocials } from '@/data/PortfolioData/Data'
import Link from 'next/link'
import React from 'react'

const TwitterSocial = () => {
    return (
        <div>
            <div className='bg-foreground p-1 rounded-md '>
                <Link href={TwitterSocials.TwitterLinkReference} target='_blank'>
                    <svg
                        width={20}
                        height={20}
                        viewBox="0 0 24 24"
                        fill="#1DA1F2"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ display: 'block' }}
                    >
                        <path d="M22.46 5.924c-.793.353-1.645.592-2.54.7a4.48 4.48 0 0 0 1.965-2.475 8.94 8.94 0 0 1-2.828 1.082A4.48 4.48 0 0 0 16.11 4c-2.48 0-4.49 2.014-4.49 4.496 0 .353.04.697.116 1.026C7.728 9.37 4.1 7.554 1.67 4.905a4.48 4.48 0 0 0-.607 2.263c0 1.563.796 2.944 2.008 3.755a4.48 4.48 0 0 1-2.034-.563v.057c0 2.183 1.553 4.004 3.617 4.42a4.48 4.48 0 0 1-2.027.077c.572 1.786 2.23 3.086 4.195 3.12A8.98 8.98 0 0 1 2 19.54a12.68 12.68 0 0 0 6.88 2.017c8.26 0 12.78-6.84 12.78-12.77 0-.195-.004-.39-.013-.583A9.14 9.14 0 0 0 24 4.59a8.98 8.98 0 0 1-2.54.697z" />
                    </svg>
                </Link>
            </div>
        </div>
    )
}

export default TwitterSocial
