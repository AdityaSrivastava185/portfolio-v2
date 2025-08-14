import React from 'react'


const Contactus = () => {
    return (
        <section className='section-border'>
            <div className='flex flex-row items-center justify-between pt-3 border-border px-3 md:px-0'>
                <p className='text-muted-foreground jetbrains-mono text-xs'>[05/05]</p>
                <p className='text-muted-foreground jetbrains-mono uppercase text-xs'></p>
                <p className='uppercase jetbrains-mono text-xs'>Contact</p>
            </div>

            <div className='max-w-3xl mx-auto py-20 px-3 md:px-0 uppercase jetbrains-mono tracking-tighter'>
                <h1 className='font-medium text-2xl font-sans text-balance'>Get in Touch</h1>
                <p className='md:text-balance text-sm pt-10 md:pt-0'>Feel free to reach out to me for any inquiries , collaborations or any questions , Just shoot me a DM on linkedin .  I do not like to involve in noisy conversations</p>
            </div>

            <div className="border-t border-border py-6 px-4 flex flex-col md:flex-row items-center justify-between text-xs text-muted-foreground">
                <div className="flex items-center space-x-4 mb-4 md:mb-0">
                    <span className="bg-card rounded-full text-foreground jetbrains-mono font-bold px-7 py-3 text-center text-balance">✨CREATIVE SUPPORT BY BORING-DESIGNER</span>
                </div>
                <p className="text-muted-foreground jetbrains-mono font-bold">© 2025 BORING-DESIGNER</p>
            </div>


        </section>
    )
}

export default Contactus
