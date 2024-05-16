import AsideMenuBtn from "./AsideMenuBtn";
import { BsBook, BsJournal, BsLightningCharge, BsStars } from "react-icons/bs";

const AsideMenu = () => {
  return (
    <div className="flex flex-col">
      <AsideMenuBtn
        className="flex items-center bg-lightYellow text-darkOrange rounded-20 p-2 border-[1px] border-darkOrange"
        value="Ruta de aprendizaje"
        icon={BsBook}
      />
      <AsideMenuBtn className="flex items-center text-active rounded-20 p-2" value="-" icon={BsLightningCharge} />
      <AsideMenuBtn className="flex items-center rounded-20 p-2" value="Ver otros cursos" icon={BsJournal} />
      <AsideMenuBtn className="flex items-center rounded-20 p-2" value="Staking" icon={BsStars} />
    </div>
  );
};
export default AsideMenu;
