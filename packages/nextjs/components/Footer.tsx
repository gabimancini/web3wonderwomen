import React from "react";
import Image from "next/image";
import logo from "../public/logo.svg";
import { BsGithub, BsHeartFill, BsInstagram, BsLinkedin } from "react-icons/bs";

//import { hardhat } from "viem/chains";
//import { SwitchTheme } from "~~/components/SwitchTheme";
// import { useTargetNetwork } from "~~/hooks/scaffold-eth/useTargetNetwork";

export const Footer = () => {
  //const { targetNetwork } = useTargetNetwork();
  //const isLocalNetwork = targetNetwork.id === hardhat.id;

  return (
    <div className="p-6 md:py-10 md:px-20">
      <div className="flex items-center flex-wrap justify-between border-b-[1px] border-solid border-borderGrey pb-4">
        <div className="flex">
          <Image src={logo} alt="Logo" className="mr-2" />
          <span className="logo text-darkGreen">DeFiWise</span>
        </div>
        <div>
          <ul className="text-darkOrange flex gap-6">
            <li>
              <BsLinkedin size={24} />
            </li>
            <li>
              <BsInstagram size={24} />
            </li>
            <li>
              <BsGithub size={24} />
            </li>
          </ul>
          {/* <SwitchTheme className={`pointer-events-auto ${isLocalNetwork ? "self-end md:self-auto" : ""}`} />*/}
        </div>
      </div>
      <div className="flex flex-wrap justify-between">
        <div>
          <p className="size-copyright">Copyright 2024 © DeFiWise. All rights reserved.</p>
        </div>
        <div>
          <p className="size-copyright flex items-center">
            Hecho con
            <span className="px-2">
              <BsHeartFill fill="red" />
            </span>{" "}
            por Web3WonderWomen
          </p>
        </div>
      </div>
    </div>
  );
};
