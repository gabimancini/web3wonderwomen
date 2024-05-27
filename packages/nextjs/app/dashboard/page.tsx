import { Module1, Module2 } from "./ruta_aprendizaje/components/Module";
import { ModuleCallToAction } from "./ruta_aprendizaje/components/ModuleCallToACtion";
import DashboardLayout from "~~/components/DashboardLayout";

const HappyPath = () => {
  return (
    <DashboardLayout>
      <section>
        <h2 className="text-active text-[23px] mb-6">Introducción a DeFi</h2>
        <Module1 />
        <Module2 />
        <ModuleCallToAction />
      </section>
    </DashboardLayout>
  );
};

HappyPath.getLayout = (page: any) => {
  page;
};

export default HappyPath;
