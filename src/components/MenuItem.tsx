export function Item({title,price}: {title:string, price:string}) {
    return (
        <div className="w-full gap-32 items-center text-[32px] flex">
            <h4 className="whitespace-nowrap">{title}</h4>
            <div className="h-[1px] w-full bg-black/25"></div>
            <h4 className="text-brand-dark">{price}</h4>
        </div>
    )
}

export function Section({title,times}: {title:string, times:string}) {
    return (
        <div className="w-full justify-between text-[64px] flex">
            <h4>{title}</h4>
            <h4>{times}</h4>
        </div>
    )
}