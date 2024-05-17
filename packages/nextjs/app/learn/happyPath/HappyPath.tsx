import { Module1, Module2 } from "./Module";
import { ModuleCallToAction } from "./ModuleCallToACtion";

const HappyPath = () => {
  return (
    <section className="max-w-[650px] md:p-6">
      <h2 className="text-active text-[23px] mb-6">Introducción a DeFi</h2>
      <Module1 />
      <Module2 />
      <ModuleCallToAction />
    </section>
  );
};
export default HappyPath;
