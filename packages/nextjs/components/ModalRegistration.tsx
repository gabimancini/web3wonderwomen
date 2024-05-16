import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import coinBaseLogo from "../public/coinbase_logo.png";
import metaMaskLogo from "../public/metamask_logo.png";

const ModalRegistration = () => {
  const [openModal, setModal] = useState(false);
  const handleModal = () => {
    setModal(!openModal);
  };
  return (
    <div>
      <button
        className="btn text-darkOrange bg-white border-solid border-2 border-darkOrange px-10 ml-10 !min-h-10 !h-10"
        onClick={handleModal}
        type="button"
      >
        Registrar
      </button>
      {openModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-lightGrey flex justify-center items-center">
          <div className="w-80 bg-white shadow-lg py-2 rounded-md">
            <div className="flex justify-between items-center border-b border-gray-300 py-3 px-4 mb-4">
              <h2 className="text-sm font-medium text-gray-900 ">Obten una billetera</h2>
              <button type="button" className="text-md rounded-md  text-darkOrange" onClick={handleModal}>
                X
              </button>
            </div>
            <div className="px-4 pb-4">
              <Link
                href="https://metamask.io/download/"
                rel="noopener noreferrer"
                target="_blank"
                className="flex bg-lightGrey p-2 justify-between items-center text-sm font-medium text-gray-700 mb-2"
              >
                Metamask <Image src={metaMaskLogo} alt="Metamask logo" width={30} height={30} />
              </Link>
              <Link
                href="https://www.coinbase.com/es/wallet/downloads"
                rel="noopener noreferrer"
                target="_blank"
                className="flex bg-lightGrey p-2 justify-between items-centertext-sm font-medium text-gray-700"
              >
                Coinbase Wallet
                <Image src={coinBaseLogo} alt="Metamask logo" width={30} height={30} />
              </Link>
            </div>
            <div className="border-t border-gray-300 flex justify-between items-center px-4 pt-2"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalRegistration;
