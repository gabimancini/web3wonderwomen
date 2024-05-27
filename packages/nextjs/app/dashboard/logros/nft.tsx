import LogrosCard from "./components/logrosCard";
import LogrosTitle from "./components/logrosTitle";
import { BsBookmarkStar } from "react-icons/bs";
import { nftData } from "~~/data/nftData";

export default function Nft() {
  return (
    <div className="border-[1px] border-lightGrey rounded-2xl mb-10 p-6">
      <LogrosTitle icon={<BsBookmarkStar />} title="NFTs desbloqueados" />
      <div className="grid grid-cols-3 gap-4">
        {nftData.map((nft, index) => {
          return <LogrosCard key={index} text={`modulo ${nft.id}`} img={nft.img} href="  " />;
        })}
      </div>
    </div>
  );
}
