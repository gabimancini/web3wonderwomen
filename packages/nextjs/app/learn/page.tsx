import AsideMenu from "./asideMenu/AsideMenu";
import HappyPath from "./happyPath/HappyPath";
import Progress from "./progress/Progress";
import { NextPage } from "next";

const Learn: NextPage = () => {
  return (
    <div className="flex p-6 max-w-[1550px] mx-auto">
      <AsideMenu />
      <HappyPath />
      <Progress />
    </div>
  );
};
export default Learn;
