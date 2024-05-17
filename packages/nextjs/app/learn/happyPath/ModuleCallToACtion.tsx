import Image from "next/image";
import pet_nft from "../../../public/pet_nft.png";
import { BsStars } from "react-icons/bs";

export const ModuleCallToAction = () => {
  return (
    <div className="border-[1px] border-darkOrange rounded-2xl px-14 py-10">
      <div className="flex">
        <Image src={pet_nft} alt="Pet add advice" />
        <div className="pl-8">
          <p className="text-subP text-darkGrey">¡Te falta poco para terminar tu curso!</p>
          <h4 className="text-h4 text-darkOrange leading-6">Completa los módulos para desbloquear tu certificado 🙌</h4>
        </div>
      </div>
      <p className="text-subP text-center text-darkGrey">
        Amplía tu conocimiento sobre DeFi <br />
        con nuestras otras rutas de aprendizaje
      </p>
      <button className="m-auto flex items-center py-2 px-10 rounded-2xl bg-gradient-to-b from-darkOrange to-lightOrange text-white font-normal">
        Descubrir más cursos <BsStars fill="white" />
      </button>
    </div>
  );
};
