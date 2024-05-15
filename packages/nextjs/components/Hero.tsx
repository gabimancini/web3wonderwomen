import Image from "next/image";
import { BsStars } from "react-icons/bs";
import { dataImgRight } from "~~/data/data";
import { dataImgLeft } from "~~/data/data";

export const Hero = () => {
  return (
    <div className="flex justify-between h-heroHeight bg-heroPattern bg-contain p-8">
      <div className="flex flex-col justify-center w-1/5 p-8">
        {dataImgRight.map(img => {
          return (
            <Image
              className={`self-${img.selfAlign}`}
              key={img.id}
              src={img.src}
              alt={img.alt}
              width={img.width}
              height={img.height}
            />
          );
        })}
      </div>
      <div className="text-center p-4">
        <div className="h-1/5">
          <p>
            <button className="bg-active text-white rounded-[50px] px-3 py-2">+ Unirme</button>
            <span className="bg-lightGreen text-neutral text-sm p-2">
              ¡Inicia hoy o elige una fecha para empezar a aprender!
            </span>
          </p>
        </div>
        <div className="text-center bg-white h-1/2 flex flex-col justify-around items-center p-4">
          <h1 className="text-h1 text-ocre">Aprende sobre finanzas en Web3</h1>
          <h2 className="text-h2 text-darkOrange">¡Desde cero!</h2>
          <h3 className="text-h3 text-ocre">Obtén certificaciones e insignias en Blockchain</h3>
          <button className="btn border-0 text-white bg-gradient-to-b from-darkOrange to-lightOrange">
            ¡Quiero inscribirme ahora!
            <BsStars />
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-center w-1/5 p-8">
        {dataImgLeft.map(img => {
          return (
            <Image
              className={`self-${img.selfAlign}`}
              key={img.id}
              src={img.src}
              alt={img.alt}
              width={img.width}
              height={img.height}
            />
          );
        })}
      </div>
    </div>
  );
};
