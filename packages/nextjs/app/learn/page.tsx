import AsideMenu from "./asideMenu/AsideMenu";
import HappyPath from "./happyPath/HappyPath";
import { Compite } from "./progress/Compite";
import Progress from "./progress/Progress";
import { NextPage } from "next";

const Learn: NextPage = () => {
  return (
    <div className="flex p-6 max-w-[1550px] gap-10 mx-auto">
      <AsideMenu />
      <HappyPath />
      <div className="max-w-[380px]">
        <Progress />
        <Compite />
      </div>
    </div>
  );
};
export default Learn;
