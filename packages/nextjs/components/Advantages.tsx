import Image from "next/image";
import certificate from "../public/certificate.svg";
import nftAwards from "../public/nftsAwards.svg";

export const Advantages = () => {
  return (
    <div className="container m-auto text-center md:mb-10" id="advantages">
      <h1 className="text-active text-h1 mt-20 mb-20">Nuestros beneficios</h1>
      <div className="flex flex-wrap justify-between">
        <div className="border-solid border-2 border-active rounded-3xl mb-10 p-10 w-[90%] m-auto md:w-[45%]">
          <h3 className="text-active text-h3 mb-10">¡Obtén certificados validados en Blockchain!</h3>
          <h4 className="text-h4 mb-10">
            Comparte nuestras certificaciones con tus contactos en tu perfil de LinkedIn u otras redes sociales.
          </h4>
          <Image src={certificate} alt="certificate" className="m-auto" />
        </div>
        <div className="border-solid border-2 border-darkOrange rounded-3xl mb-10 p-10 w-[90%] m-auto  md:w-[45%]">
          <h3 className="text-darkOrange text-h3 mb-10">¡Gana NFTs, Tokens y más beneficios aprendiendo</h3>
          <p className="text-p mb-10">
            Comparte nuestras certificaciones con tus contactos en tu perfil de LinkedIn u otras redes sociales.
          </p>
          <Image src={nftAwards} alt="NFT Awards" className="m-auto" />
        </div>
      </div>
    </div>
  );
};
