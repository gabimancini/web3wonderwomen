import { ModuleCallToAction } from "../ruta_aprendizaje/components/ModuleCallToACtion";
import Airdrop from "./airdrop";
import Certificado from "./certificado";
import Nft from "./nft";
import DashboardLayout from "~~/components/DashboardLayout";

const Logros = () => {
  return (
    <DashboardLayout>
      <h2 className="text-title text-darkOrange">Mis logros 🏅</h2>
      <Airdrop />
      <Nft />
      <Certificado />
      <ModuleCallToAction />
    </DashboardLayout>
  );
};

Logros.getLayout = (page: any) => {
  page;
};

export default Logros;
