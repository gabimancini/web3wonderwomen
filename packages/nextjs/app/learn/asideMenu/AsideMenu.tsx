import AsideMenuBtn from "./AsideMenuBtn";
import { BsAward, BsBook, BsJournals, BsStars } from "react-icons/bs";

const AsideMenu = () => {
  return (
    <aside className="flex flex-col p-6">
      <AsideMenuBtn
        className="flex items-center bg-lightYellow text-darkOrange font-normal rounded-xl p-2 border-[1px] border-darkOrange mb-2"
        value="Ruta de aprendizaje"
        icon={BsBook}
        fill="darkOrange"
      />
      <AsideMenuBtn
        className="flex items-center text-darkGrey font-normal rounded-xl border-[1px] border-borderGrey p-2 mb-2"
        value="Mis logros"
        icon={BsAward}
        fill="#68CC58"
      />
      <AsideMenuBtn
        className="flex items-center text-darkGrey font-normal rounded-xl border-[1px] border-borderGrey p-2 mb-2"
        value="Ver otros cursos"
        icon={BsJournals}
        fill="#68CC58"
      />
      <AsideMenuBtn
        className="flex items-center text-darkGrey font-normal rounded-xl border-[1px] border-borderGrey p-2 mb-2"
        value="Staking"
        icon={BsStars}
        fill="#CDCDCD"
      />
    </aside>
  );
};
export default AsideMenu;
