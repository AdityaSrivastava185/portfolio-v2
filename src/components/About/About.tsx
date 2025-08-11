import React from 'react'
import Link from 'next/link'
import Socials from '../Socials/Socials'

const About = () => {
    return (
        <section className='section-border'>
            <div className='flex flex-row items-center justify-between pt-3'>
                <p className='text-muted-foreground jetbrains-mono text-xs'>[01/05]</p>
                <p className='text-muted-foreground jetbrains-mono uppercase text-xs'>positioning</p>
                <p className='uppercase jetbrains-mono text-xs'>About me</p>
            </div>
            <div className="md:max-w-xl max-w-[90%] mx-auto md:px-8 md:pt-20 md:pb-10 py-10 md:py-0 space-y-6">
                <p className=" text-md uppercase jetbrains-mono text-sm">most early-stage builders spend hours scrolling through Dribbble, remixing Figma kits, or DM&apos;ing friends for design feedback.
                </p>
                <p className='text-sm jetbrains-mono uppercase'>
                    but they&apos;re doing it alone. Every single time.
                </p>
                <p className="text-md uppercase jetbrains-mono text-sm">
                   I don&apos;t design to entertain. I design to win.
                </p>
                <p className='text-md uppercase jetbrains-mono text-sm'>
                    Every pixel is placed like it&apos;s playing chess. Every animation is there for a reason.Minimalism isn&apos;t an aesthetic here—it&apos;s a weapon.Boring Designer is sarcastic in name, serious in execution.I strip away the fluff, the overdesigned nonsense, the trends that age faster than milk. What&apos;s left is a website so sharp, so clean, it&apos;s almost disrespectful to the “dribbble shot” crowd.
                </p>
               <p className=" text-md uppercase jetbrains-mono text-sm">
                   I&apos;m not here to please everyone. In fact, if my work impresses you easily, I&apos;ve probably failed.Because the people who get it, really get it
                </p>
                <p className='text-md uppercase jetbrains-mono text-sm'>
                    If you want a carnival, you can go elsewhere.If you want something timeless, minimal, and quietly dangerous—welcome to Boring Designer.
                </p>
               <p className=" text-md uppercase jetbrains-mono text-sm">
                    You don&apos;t need a designer. You don&apos;t need a wait. You just need to ship.
                </p>
                <p className='text-md uppercase jetbrains-mono text-sm'>
                    And we&apos;re shipping it publicly — so others can too.
                </p>
               <Socials />
            </div>
        </section>
    )
}

export default About
