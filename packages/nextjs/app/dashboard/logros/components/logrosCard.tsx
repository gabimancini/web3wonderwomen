import Image from "next/image";
import { BsArrowUpRightSquare } from "react-icons/bs";

interface LogrosCardProps {
  text: string;
  img: string;
  href: string;
}
export default function LogrosCard(props: LogrosCardProps) {
  return (
    <div className="flex flex-col items-center">
      <Image src={props.img} alt={props.text} width="200" height="200" />
      <button className="text-darkOrange border-[2px] border-darkOrange rounded-xl w-[140px] text-btn mt-2 bg-lightBeige font-semibold py-[5px]">
        {props.text}
      </button>
      <a href={props.href} className="flex items-center mt-2 underline">
        <span className="mr-[5px]">Ver contrato</span>
        <BsArrowUpRightSquare />
      </a>
    </div>
  );
}
