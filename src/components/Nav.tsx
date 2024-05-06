import { useState } from "react";
import Button from "./Button";
import { Bars3Icon, XIcon } from "@heroicons/react/24/outline";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="flex max-[700px]:flex-col max-[700px]:h-fit items-center sticky top-16 z-50 border border-black h-[47px] overflow-clip">
      <div className="bg-fg px-24 py-8 w-full flex items-center h-[47px] justify-between">
        <a href="/">
          <img src="/logo mark.png" alt="Logo" className="size-72" />
        </a>
        <button
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className="hidden max-[700px]:block size-24"
        >
          {isOpen ? <XIcon /> : <Bars3Icon />}
        </button>
      </div>
      <div
        className={`flex max-[700px]:hidden ${
          isOpen ? "flex flex-col" : "hidden"
        }`}
      >
        <Button text="MAISON" link="/" colour="primary" />
        <Button text="COMMANDE" link="/" colour="secondary" />
        <Button text="MENU" link="/menu" colour="primary" />
        <Button text="À PROPOS DE" link="/about" colour="secondary" />
      </div>
    </nav>
  );
}
