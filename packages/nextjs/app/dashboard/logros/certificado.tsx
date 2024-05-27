import LogrosCard from "./components/logrosCard";
import LogrosTitle from "./components/logrosTitle";
import { BsBookmarkStar } from "react-icons/bs";
import { certificateData } from "~~/data/certificateData";

export default function Certificado() {
  return (
    <div className="border-[1px] border-lightGrey rounded-2xl mb-10 p-6">
      <LogrosTitle icon={<BsBookmarkStar />} title="Certificados obtenidos" />
      <div className="grid grid-cols-2 gap-4">
        {certificateData.map((certificate, index) => {
          return <LogrosCard key={index} text="" img={certificate.img} href="" />;
        })}
      </div>
    </div>
  );
}
