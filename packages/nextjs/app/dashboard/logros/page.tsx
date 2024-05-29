import Airdrop from "./airdrop";
import Certificado from "./certificado";
import Nft from "./nft";
import MemberShip from "./memberdhip";
import DashboardLayout from "~~/components/DashboardLayout";

const Logros = () => {
  return (
    <DashboardLayout>
      <h2 className="text-title text-darkOrange mb-6">Mis logros 🏅</h2>
      <Airdrop />
      <Nft />
      <Certificado />
      <MemberShip />
    </DashboardLayout>
  );
};

Logros.getLayout = (page: any) => {
  page;
};

export default Logros;
