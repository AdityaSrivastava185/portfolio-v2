const items = [
    {
        body: "Reactjs.",
    },
    {
        body: "Design Engineering.",
    },
    {
        body: "Shadcn UI.",
    },
    {

        body: "Nextjs. ",
    },
    {

        body: "Typescript.",
    },
]

export default function MarqueeFooter() {
    return (
        <div className="relative flex items-center rounded-sm overflow-hidden">
            <div className="relative flex max-w-[100vw] overflow-hidden">
                <div className="flex w-max animate-marquee [--duration:30s] hover:[animation-play-state:paused]">
                    {[...items, ...items].map((item, index) => (
                        <div key={index} className="h-full mx-2">
                            <div className="relative h-full w-[20rem] rounded-2xl border border-border bg-transparent py-2">
                                <div className=" font-medium bebas uppercase text-foreground text-center">{item.body}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
