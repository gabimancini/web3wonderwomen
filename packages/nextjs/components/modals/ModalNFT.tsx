import Image from "next/image";
import Link from "next/link";
import DefIWiseNFT from "../../public/DeFiWiseNFT.png";
import { BsArrowUpRightSquare, BsAwardFill, BsStars } from "react-icons/bs";

export const ModalNFT = ({ setModal }: any) => {
  const closeModalNFT = () => {
    setModal(false);
  };
  return (
    <section className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
      <div className="max-w-[90%] md:max-w-[650px] bg-white shadow-lg p-8 rounded-lg flex flex-col justify-center items-center">
        <BsAwardFill fill="darkOrange" size={40} />
        <h3 className="text-darkOrange mt-8 text-h3">¡Felicidades!</h3>

        <div className="flex flex-col md:flex-row items-center  bg-lightYellow">
          <Image src={DefIWiseNFT} alt="Defiwise NFT" />
          <div className="p-8">
            <h4 className="text-darkOrange text-h4 mb-4">Ganaste un NFT 🙌</h4>
            <p className="text-subP my-1">
              <Link
                target="_blank"
                href="https://collectors.poap.xyz/drop/173768"
                rel="noopener noreferrer"
                className="flex underline"
              >
                Ver el contrato de la transacción <BsArrowUpRightSquare />{" "}
              </Link>
            </p>
            <p className="text-subP my-1">Recuerda que podrás ver la transacción en tu wallet</p>
            <p className="text-subP my-1">
              ¡Continúa aprendiendo para coleccionar más badges y obtener certificados validados en Blockchain!
            </p>
          </div>
        </div>
        <button className=" flex items-center py-2 px-10 rounded-2xl bg-active text-white" onClick={closeModalNFT}>
          Continuar <BsStars fill="white" className="ml-2" />
        </button>
      </div>
    </section>
  );
};
