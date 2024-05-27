import ModuleTask from "./ModuleTask";
import ModuleTitle from "./ModuleTitle";

export const Module1 = ({ certModal }: any) => {
  return (
    <div>
      <ModuleTitle
        className="flex justify-between text-white bg-active p-5 rounded-xl"
        num="1"
        subTitle="¿Qué es DeFi (Finanzas Descentralizadas)?"
      />
      <ModuleTask bgColor={`bg-active text-white ${certModal ? "bg-active text-white" : ""}`} textColor="text-active" />
    </div>
  );
};

export const Module2 = () => {
  return (
    <div>
      <ModuleTitle
        className="flex justify-between text-white bg-pink p-5 rounded-xl"
        num="2"
        subTitle="¿Cómo funciona el sistema DeFi?"
      />
      <ModuleTask bgColor="bg-pink text-white" textColor="text-pink" />
    </div>
  );
};
