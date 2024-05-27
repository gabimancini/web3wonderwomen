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
    <div className="flex flex-col md:flex-row justify-center gap-8 container m-auto">
      <AsideMenu />
      <div className="max-w-[650px] md:p-6">{children}</div>
      <aside className="lg:max-w-[380px] ">
        <Progress />
        <Compite />
      </aside>
    </div>
  );
};
export default DashboardLayout;
