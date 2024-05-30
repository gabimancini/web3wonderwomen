"use client";

import AsideMenuBtn from "./AsideMenuBtn";
import { BsAward, BsBook, BsJournals, BsSearch, BsStars } from "react-icons/bs";
import { UnlockEvent } from "~~/app/dashboard/logros/airdrop";

const AsideMenu = () => {
  return (
    <aside className="w-[100%] md:w-auto">
      <AsideMenuBtn value="Ruta de aprendizaje" icon={BsBook} fill="darkOrange" href="/dashboard" />
      <AsideMenuBtn value="Mis logros" icon={BsAward} fill="#68CC58" href="/dashboard/logros" />
      <AsideMenuBtn value="Ver otros cursos" icon={BsJournals} fill="#68CC58" href="#" />
      <AsideMenuBtn value="Staking" icon={BsStars} fill="#CDCDCD" href="#" />
      <AsideMenuBtn value="Explorar eventos" icon={BsSearch} fill="#CDCDCD" href={UnlockEvent} />
    </aside>
  );
};
export default AsideMenu;
