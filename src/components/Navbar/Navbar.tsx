import { navData } from '@/data/NavData/NavData'
import Link from 'next/link'
import React from 'react'
import { HyperText } from "@/components/magicui/hyper-text";
import { Name } from '@/data/PortfolioData/Data';

const Navbar = () => {
    return (
        <>
            <div className='hidden md:flex md:flex-row md:items-center justify-between md:gap-20 py-7 '>
                <div>
                    <h1 className='font-sans font-bold text-xl tracking-tighter'>{Name}</h1>
                </div>
                <div className='flex flex-row items-center justify-between gap-10 '>
                    {
                        navData.map((item, idx) => (
                            <div key={idx} className=''>
                                <Link className='jetbrains-mono text-md tracking-tight' href={item.path}>
                                    <HyperText className='text-sm font-normal'>{item.title}</HyperText>
                                </Link>
                            </div>

                        ))
                    }
                </div>
            </div>
            <div className='md:hidden mt-7 md:mt-0 flex flex-row items-center justify-between border-b-1 pb-2 border-border'>
               <div>
                    <h1 className='font-sans font-bold md:text-xl jetbrains-mono uppercase text-sm tracking-tighter'>{Name}</h1>
                </div> 
                <div>
                    <button className='jetbrains-mono text-xs tracking-tight bg-foreground text-background px-3 py-2 rounded-full'>Github</button>
                </div>
            </div>
        </>
    )
}

export default Navbar
