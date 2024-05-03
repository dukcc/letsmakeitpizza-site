import Button from "./Button";

export default function Nav() {
    return (
        <nav className="flex sticky top-16 border border-black h-[47px] overflow-clip">
            <div className="bg-fg px-24 py-8 w-full flex items-center"><img src="/logo mark.png" alt="Logo" className="size-72" /></div>
            <Button text="MAISON" link="/" colour="primary" />
            <Button text="COMMANDE" link="/" colour="secondary" />
            <Button text="MENU" link="/menu" colour="primary" />
            <Button text="SUR" link="/about" colour="secondary" />
        </nav>
    )
}