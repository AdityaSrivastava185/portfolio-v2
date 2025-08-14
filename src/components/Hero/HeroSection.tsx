
import React from 'react'
import WrapButton from '@/components/ui/wrap-button'
import { ArrowRight, Globe } from 'lucide-react'
import MarqueeFooter from '@/utils/MarqueeFooter'


const HeroSection = () => {
    return (
        <>
            <section className="section-border text-center py-7 px-4">
                <div className='md:mb-7 border border-border w-fit px-10 py-2 mx-auto rounded-full uppercase jetbrains-mono text-xs bg-sidebar'>
                    <p className='font-bold text-balance w-fit'>✨Creative backed by boring-designer</p>
                </div>
                <div className=' w-fit mx-auto rounded-full uppercase jetbrains-mono text-xs text-balance pt-7 md:pt-0'>
                    <p>#open for the opportunities</p>
                </div>
                <h1 className='font-sans max-w-2xl md:max-w-3xl mx-auto text-3xl md:text-7xl text-balance tracking-tighter font-bold md:pt-0'>HELLO WORLD , MY NAME GOES BY BORING DESIGNER</h1>
                <p className=' md:px-0 max-w-2xl text-muted-foreground mx-auto mt-4 text-xs md:text-md tracking-tighter text-balance uppercase jetbrains-mono'>hello i am a fu**ing passionate developer who loves to create stunning web applications and user experience.I am someone who always crave to build legendary sh*t and build the reality from my imagination</p>
                <div className='flex flex-col items-center justify-center mt-7 gap-2 jetbrains-mono tracking-tighter'>
                    <WrapButton className="bg-transparent jetbrains-mono text-sm uppercase" href="/docs/components/card-carousel" >
                        <Globe className="animate-spin " />
                        Check out my work
                    </WrapButton>
                    <p className='uppercase jetbrains-mono text-sm md:text-base'>Reach out to me whenever you feel</p>
                </div>
                <div className='flex flex-col md:flex-row items-center justify-between md:pb-2 md:pt-10 md:px-7 my-7 md:my-0 gap-2 md:gap-0'>
                    <div className='uppercase jetbrains-mono text-xs'>
                        <p className='text-muted-foreground'>///By the way. <span className='text-foreground'>skills i have</span></p>
                    </div>
                    <div className='uppercase jetbrains-mono text-xs'>
                        <p>/// one protocol. <span className='text-muted-foreground'>just build it</span></p>
                    </div>
                </div>
                <div className="border-t border-border py-4">
                    <MarqueeFooter />
                </div>
            </section>
        </>
    )
}

export default HeroSection
