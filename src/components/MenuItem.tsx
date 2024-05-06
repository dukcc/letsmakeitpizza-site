export function Item({title,price,serving,sub}: {title:string, price:string, serving?:string, sub?:boolean}) {
    return (
        <div className={`w-full gap-32 items-center text-[32px] flex ${sub ? 
            "pl-64" : ""
        }`}>
            <h4 className="whitespace-nowrap">{title}</h4>
            <div className="h-[1px] w-full bg-black/25"></div>
            <h4 className="text-black/75 whitespace-nowrap">{serving}</h4>
            <h4 className="text-brand-dark">{price}</h4>
        </div>
    )
}

export function ItemSection({title}: {title:string}) {
    return (
        <div className="w-full gap-32 items-center text-[32px] flex">
            <h4 className="whitespace-nowrap">{title}</h4>
            <div className="h-[1px] w-full bg-black/25"></div>
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