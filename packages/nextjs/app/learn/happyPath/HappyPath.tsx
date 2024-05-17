import { Module1, Module2 } from "./Module";
import { ModuleCallToAction } from "./ModuleCallToACtion";

const HappyPath = () => {
  return (
    <div className="max-w-[650px] p-6">
      <h2 className="text-active text-[23px] mb-6">Introducción a DeFi</h2>
      <Module1 />
      <Module2 />
      <ModuleCallToAction />
    </div>
  );
};
export default HappyPath;
