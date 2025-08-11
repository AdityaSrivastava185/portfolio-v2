import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { PortfolioSocials } from '@/data/PortfolioData/Data'

const PortfolioSocial = () => {
    return (
        <div>
            <div className='bg-foreground p-1 rounded-md '>
                <div>
                    <Link href={PortfolioSocials.LinkReference} target='_blank'>
                        <Image src={PortfolioSocials.ImageSrc} alt='Image of portfolio' width={20} height={20} />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default PortfolioSocial
