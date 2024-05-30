import Image from "next/image";
import Link from "next/link";
import membership from "../../../public/membership.svg";
import LogrosTitle from "./components/logrosTitle";
import { BsBookmarkStar, BsCalendar, BsCameraVideo, BsStars } from "react-icons/bs";

export default function MemberShip() {
  const UnlockMembership = "https://app.unlock-protocol.com/checkout?id=356e8baf-9a3a-4fe6-959e-41bb130975b6";
  return (
    <div className="border-[1px] border-lightGrey rounded-2xl mb-10 p-10">
      <LogrosTitle title="Cursos exclusivos para miembros" icon={<BsBookmarkStar size={40} fill="darkOrange" />} />
      <div className="flex justify-between items-center pt-6">
        <h4 className="text-h4">SecureChain DeFi Seminar 🔐</h4>
        <Link href={UnlockMembership} target="_blank">
          <button className="flex border-0 rounded-2xl text-white bg-gradient-to-b from-darkOrange to-lightOrange py-[8px] p-8 text-semibold text-subP">
            <span className="mr-2">Anotarme</span> <BsStars />
          </button>
        </Link>
      </div>
      <div className="flex justify-between pt-6">
        <Image src={membership} alt="Membership" width={100} />
        <div className="pl-7">
          <h3 className="text-subP">📝 Acerca del Curso</h3>
          <p className="mt-2 mb-0">
            Forma parte de un seminario dedicado a las mejores prácticas y estrategias para asegurar los activos y
            plataformas en DeFi 👩‍💻
          </p>
        </div>
      </div>
      <div className="flex pt-6  gap-4">
        <div className="flex pr-6">
          <span className="self-start border-2 border-lightGrey rounded-md p-2">
            <BsCalendar size={20} />
          </span>
          <div className="text-grey pl-4">
            <h3 className="subP text-semibold">Fecha</h3>
            <p className="subP text-regular m-0">Lunes, Junio 17, 2024</p>
            <p className="subP text-regular m-0">7:00 - 10:00 pm GTM-5</p>
          </div>
        </div>
        <div className="flex pr-6">
          <span className="self-start border-2 border-lightGrey rounded-md p-2">
            <BsCameraVideo size={20} />
          </span>
          <div className="text-grey pl-4">
            <h3 className="subP text-semibold">Ubicación</h3>
            <p className="subP text-regular m-0">Google Meet</p>
          </div>
        </div>
      </div>
    </div>
  );
}
