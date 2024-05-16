import AsideMenu from "./asideMenu/AsideMenu";
import HappyPath from "./happyPath/HappyPath";
import Progress from "./progress/Progress";
import { NextPage } from "next";

const Learn: NextPage = () => {
  return (
    <div className="flex p-8 max-w-[1550px] m-auto">
      <AsideMenu />
      <HappyPath />
      <Progress />
    </div>
  );
};
export default Learn;
