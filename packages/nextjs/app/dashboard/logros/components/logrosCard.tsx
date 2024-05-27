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
      <button>{props.text}</button>
      <br />
      <a href={props.href} className="flex">
        <span>Ver contrato</span>
        <BsArrowUpRightSquare />
      </a>
    </div>
  );
}
