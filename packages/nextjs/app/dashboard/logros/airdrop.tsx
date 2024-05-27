import LogrosCard from "./components/logrosCard";
import LogrosTitle from "./components/logrosTitle";
import { BsBookmarkStar } from "react-icons/bs";
import { BsCalendarWeek } from "react-icons/bs";
import { logrosData } from "~~/data/logrosData";

export default function Airdrop() {
  return (
    <div className="border-[1px] border-lightGrey rounded-2xl  mb-10 p-6">
      <LogrosTitle icon={<BsBookmarkStar />} title="Airdrops adquiridos" />
      <div className="grid grid-cols-3 gap-4">
        {logrosData.map((airdrop, index) => {
          return <LogrosCard key={index} text={airdrop.text} img={airdrop.img} href={airdrop.href} />;
        })}
        <div>
          <BsCalendarWeek
            size={100}
            fill="linear-gradient(128deg, rgba(157,129,36,1) 12%, rgba(97,79,13,1) 34%, rgba(31,30,28,1) 52%, rgba(97,79,13,1) 71%, rgba(157,129,36,1) 86%)"
          />
          <p className="text-[12px]">¡Asiste a nuestros eventos para ganar más airdrops!</p>
          <button>Explorar eventos</button>
        </div>
      </div>
    </div>
  );
}
