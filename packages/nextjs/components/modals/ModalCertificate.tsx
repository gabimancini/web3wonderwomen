import Image from "next/image";
import Link from "next/link";
import certificate from "../../public/certificate.svg";
import { BsArrowUpRightSquare, BsFillTrophyFill, BsJournalCheck } from "react-icons/bs";

export const ModalCertificate = ({ setCertModal }: any) => {
  const closeModal = () => {
    setCertModal(false);
  };
  return (
    <section className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
      <div className="max-w-[90%] md:max-w-[820px] bg-white shadow-lg p-8 rounded-lg flex flex-col justify-center items-center">
        <BsFillTrophyFill fill="darkOrange" size={40} />
        <h3 className="text-darkOrange mt-8 text-h3">¡Felicidades!</h3>

        <div className="flex flex-col md:flex-row items-center  bg-lightYellow">
          <Image src={certificate} alt="Defiwise NFT" />
          <div className="p-8 text-center">
            <h4 className="text-darkOrange text-h4 mb-4">¡Obtuviste tu primer certificado!</h4>
            <p className="text-subP my-1">
              <Link
                target="_blank"
                href="https://sepolia.etherscan.io/tx/0x01ed297f62b872542c9c59ccd48da2650cb0639a57aaadfb1cbda31786e1ae09"
                rel="noopener noreferrer"
                className="flex justify-center underline"
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
        <button
          className="flex items-center py-2 px-10 rounded-2xl bg-gradient-to-b from-darkOrange to-lightOrange text-white font-normal"
          onClick={closeModal}
        >
          Volver al inicio <BsJournalCheck fill="white" className="ml-2" />
        </button>
      </div>
    </section>
  );
};
