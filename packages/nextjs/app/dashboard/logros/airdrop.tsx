import Link from "next/link";
import LogrosCard from "./components/logrosCard";
import LogrosTitle from "./components/logrosTitle";
import { BsBookmarkStar } from "react-icons/bs";
import { BsCalendarWeek } from "react-icons/bs";
import { logrosData } from "~~/data/logrosData";

export const UnlockEvent = "https://app.unlock-protocol.com/checkout?id=267bcee1-b90f-4159-8b6e-666623ed5eef";

export default function Airdrop() {
  return (
    <div className="border-[1px] border-lightGrey rounded-2xl  mb-10 p-6">
      <LogrosTitle icon={<BsBookmarkStar size={40} fill="darkOrange" />} title="Airdrops adquiridos" />
      <div className="grid grid-cols-3 gap-14 pt-6">
        {logrosData.map((airdrop, index) => {
          return <LogrosCard key={index} text={airdrop.text} img={airdrop.img} href={airdrop.href} />;
        })}
        <div className="flex flex-col justify-evenly items-center py-6">
          <BsCalendarWeek size={100} fill="darkOrange" />
          <p className="text-[12px] m-0">¡Asiste a nuestros eventos para ganar más airdrops!</p>
          <Link href={UnlockEvent} target="_blank">
            <button className="border-0 rounded-xl text-white bg-gradient-to-b from-darkOrange to-lightOrange py-[8px] text-semibold px-3 text-btn">
              Próximo evento
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
