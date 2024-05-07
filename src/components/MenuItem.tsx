import { useState } from "react";
import Button from "./Button";

export function Item({
  title,
  price,
  serving,
  sub,
  desc = "Description",
}: {
  title: string;
  price: string;
  serving?: string;
  sub?: boolean;
  desc?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={`w-full flex flex-col ${sub ? "pl-24" : ""}`}>
      <button
        onClick={toggleOpen}
        className="flex gap-32 items-center hover:translate-x-8 duration-200 ease-out"
      >
        <h4 className="whitespace-nowrap text-[32px] max-[670px]:text-[16px]">
          {title}
        </h4>
        <div className="h-[1px] w-full bg-black/25"></div>
        <h4 className="text-black/75 whitespace-nowrap  text-[32px] max-[670px]:text-[16px]">
          {serving}
        </h4>
        <h4 className="text-brand-dark text-[32px] max-[670px]:text-[16px]">
          {price}
        </h4>
      </button>
      <div className={isOpen ? "flex justify-between" : "hidden"}>
        <p className="text-[16px]">{desc}</p>
        <Button colour="primary" text="commande" link="#" />
      </div>
    </div>
  );
}

export function ItemSection({ title }: { title: string }) {
  return (
    <div className="w-full gap-32 items-center text-[32px] flex">
      <h4 className="whitespace-nowrap">{title}</h4>
      <div className="h-[1px] w-full bg-black/25"></div>
    </div>
  );
}

export function Section({ title, times }: { title: string; times: string }) {
  return (
    <div className="w-full justify-between text-[64px] max-[670px]:text-[24px] flex">
      <h4>{title}</h4>
      <h4>{times}</h4>
    </div>
  );
}
