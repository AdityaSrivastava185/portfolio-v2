import Link from 'next/link'
import React from 'react'

const Miscellaneous = () => {
  return (
    <section className='section-border'>
      <div className='flex flex-row items-center justify-between pt-3 border-border px-3 md:px-0' >
        <p className='text-muted-foreground jetbrains-mono text-xs'>[04/05]</p>
        <p className='text-muted-foreground jetbrains-mono uppercase text-xs'></p>
        <p className='uppercase jetbrains-mono text-xs'>Miscellaneous</p>
      </div>
      <div className='md:pb-20 my-10 md:my-0 md:pt-10 max-w-3xl mx-auto px-3 md:px-0'>
        <ul className="list-disc pl-5 text-sm md:text-balance space-y-2 uppercase jetbrains-mono tracking-tighter">
          <li>Founding <Link href={"https://boring-designer.com"} className="text-blue-500 underline">@Boring-Designer</Link></li>
          <li>Certification by <Link href={"https://lfx.linuxfoundation.org/tools/mentorship/"} className="text-blue-500 underline">Linux Foundation</Link> in Open Source Technical Documentations Essentials (LFC111)</li>
          <li>
            Open source contributor at <Link href={"https://www.prisma.io/"} className="text-blue-500 underline">Prisma ORM</Link> , hlping to improve the CLI documentation serving over <span className="font-bold">100MN+</span> users globally.
          </li>
          <li>Open source contributor at <Link href={"https://github.com/intentjs/intent"} className="text-blue-500 underline">Intentjs</Link> , built the complete frontend of the website solo under the guidence of the founder</li>
          <li>Maintainer and Open source contributor at <Link href={"https://github.com/AdityaSrivastava185/Reactjs-For-Beginners"} className="text-blue-500 underline">Reactjs-For-Beginners</Link> , built the complete repository for beginners to learn React.js with clean and easy to understand docs and enable them to contribute while they learn</li>
          <li>Accumulated over 20 badges and 8 trophies across different cloud, open source, and various technical courses on Microsoft
            Learn</li>
        </ul>
      </div>
    </section>
  )
}

export default Miscellaneous
