import AsideMenuBtn from "./AsideMenuBtn";
import { BsBook, BsJournals, BsAward, BsStars } from "react-icons/bs";

const AsideMenu = () => {
  return (
    <div className="flex flex-col">
      <AsideMenuBtn
        className="flex items-center bg-lightYellow text-darkOrange rounded-20 p-2 border-[1px] border-darkOrange mb-2"
        value="Ruta de aprendizaje"
        icon={BsBook}
        fill="darkOrange"
      />
      <AsideMenuBtn
        className="flex items-center rounded-20 border-[1px] border-borderGrey p-2 mb-2"
        value="Mis logros"
        icon={BsAward}
        fill="#68CC58"
      />
      <AsideMenuBtn
        className="flex items-center rounded-20 border-[1px] border-borderGrey p-2 mb-2"
        value="Ver otros cursos"
        icon={BsJournals}
        fill="#68CC58"
      />
      <AsideMenuBtn
        className="flex items-center rounded-20 border-[1px] border-borderGrey p-2 mb-2"
        value="Staking"
        icon={BsStars}
        fill="#828282"
      />
    </div>
  );
};
export default AsideMenu;
