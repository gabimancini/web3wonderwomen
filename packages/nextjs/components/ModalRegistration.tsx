import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import coinBaseLogo from "../public/coinbase_logo.png";
import metaMaskLogo from "../public/metamask_logo.png";
import walletConnectLogo from "../public/walletconnect_logo.png";

const ModalRegistration: React.FC = () => {
  const [openModal, setModal] = useState(false);

  const handleModal = () => {
    setModal(!openModal);
  };

  return (
    <div>
      <button
        className="btn text-darkOrange bg-white border-solid border-2 border-darkOrange px-4 md:px-10 md:ml-10 !min-h-10 !h-10"
        onClick={handleModal}
        type="button"
      >
        Registrar
      </button>
      {openModal && (
        <div className="z-[999] fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="w-80 bg-white shadow-lg py-4 rounded-lg">
            <div className="flex justify-between items-center border-b border-gray-300 pb-3 px-4 mb-4">
              <h2 className="text-lg font-medium text-gray-900">Obten una billetera</h2>
              <button type="button" className="text-lg rounded-md text-darkOrange" onClick={handleModal}>
                X
              </button>
            </div>
            <div className="px-4 pb-4 text-center">
              <p className="mb-4 text-primary-content">Comience a explorar Web3</p>
              <p className="mb-4 text-gray-600">
                Su billetera es la puerta de entrada a todo lo relacionado con Ethereum, la tecnología mágica que hace
                posible explorar web3.
              </p>
              <div className="flex justify-around mb-6">
                <Link href="https://metamask.io/download/" target="_blank">
                  <Image src={metaMaskLogo} alt="Metamask logo" width={40} height={40} />
                </Link>
                <Link href="https://walletconnect.org/" target="_blank">
                  <Image src={walletConnectLogo} alt="WalletConnect logo" width={40} height={40} />
                </Link>
                <Link href="https://www.coinbase.com/es/wallet/downloads" target="_blank">
                  <Image src={coinBaseLogo} alt="Coinbase logo" width={40} height={40} />
                </Link>
              </div>
              <button
                className="btn border-0 text-white bg-gradient-to-b from-darkOrange to-lightOrange"
                onClick={handleModal}
              >
                Elige tu primera billetera{" "}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalRegistration;
