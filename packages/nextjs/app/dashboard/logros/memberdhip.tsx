import Image from "next/image";
import Link from "next/link";
import membership from "../../../public/membership.svg";
import LogrosTitle from "./components/logrosTitle";
import { BsBookmarkStar, BsCalendar, BsCameraVideo, BsStars } from "react-icons/bs";

export default function MemberShip() {
    const UnlockMembership = "https://app.unlock-protocol.com/checkout?id=356e8baf-9a3a-4fe6-959e-41bb130975b6";
    return (
        <div className="border-[1px] border-lightGrey rounded-2xl mb-10 p-6">
            <LogrosTitle title="Cursos rxclusivos para miembros" icon={<BsBookmarkStar size={40} fill="darkOrange" />} />
            <div  className="flex justify-between items-center">
                <h4 className="text-h4">SecureChain DeFi Seminar 🔐</h4>
                <Link href={UnlockMembership} target="_blank">
                    <button className="flex border-0 rounded-xl text-white bg-gradient-to-b from-darkOrange to-lightOrange py-[8px] text-semibold px-3 text-btn">
                        Anotarme <BsStars/>
                    </button>
                </Link>
            </div>
            <div className="flex">
                <Image src={membership} alt="Membership" />
                <div>
                    <h3 className="text-h3">📝 Acerca del Curso</h3>
                    <p>
                        Forma parte de un seminario dedicado a las mejores prácticas y estrategias para asegurar los activos y
                        plataformas en DeFi 👩‍💻
                    </p>
                </div>

            </div>
            <div className="flex">
                <div>
                    <BsCalendar />
                    <div>
                        <h3 className="text-h3">Fecha</h3>
                        <span>Lunes, Junio 17, 2024</span>
                        <span>7:00 - 10:00 pm GTM-5</span>
                    </div>
                </div>
                <div>
                    <BsCameraVideo />
                    <div>
                        <h3 className="text-h3">Ubicación</h3>
                        <span>Google Meet</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
