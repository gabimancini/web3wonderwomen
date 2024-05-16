import ModuleTask from "./ModuleTask";
import ModuleTitle from "./ModuleTitle";

const Module = () => {
  return (
    <div>
      <ModuleTitle
        className="flex fle-col text-white bg-active p-5 rounded-xl"
        num="1"
        subTitle="¿Qué es DeFi (Finanzas Descentralizadas)?"
      />
      <ModuleTask />
    </div>
  );
};
export default Module;
