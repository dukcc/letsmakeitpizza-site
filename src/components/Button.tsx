export default function Button({
  text,
  link,
  colour,
}: {
  text: string;
  link: string;
  colour: string;
}) {
  if (colour == "primary") {
    colour = "#FF5942";
  } else if (colour == "secondary") {
    colour = "#FFFFFF";
  }
  return (
    <a
      href={link}
      style={{ backgroundColor: colour }}
      className={`h-[47px] uppercase w-fit px-24 duration-200 ease-out hover:rounded-[24px] active:scale-90 text-[24px] flex justify-center items-center whitespace-nowrap`}
    >
      {text}
    </a>
  );
}
