import { ReactNode } from "react";
import AsideMenu from "./asideMenu/AsideMenu";
import { Compite } from "~~/app/dashboard/progress/Compite";
import Progress from "~~/app/dashboard/progress/Progress";

interface Props {
  children?: ReactNode;
  // any props that come into the component
}
const DashboardLayout = ({ children }: Props) => {
  return (
    <div className="flex flex-wrap lg:justify-center gap-8 max-w-[1536px] m-auto">
      <AsideMenu />
      <div className="max-w-[750px] md:p-6">{children}</div>
      <aside className="lg:max-w-[380px] ">
        <Progress />
        <Compite />
      </aside>
    </div>
  );
};
export default DashboardLayout;
