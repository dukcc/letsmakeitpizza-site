export default function Button({text,link,colour}: {text:string, link:string, colour:string}) {
    return (
        <a href={link} className={`bg-${colour} h-[47px] w-fit px-24 duration-200 ease-out hover:rounded-[24px] text-[24px] flex justify-center items-center border border-transparent hover:border-black`}>{text}</a>
    )
}