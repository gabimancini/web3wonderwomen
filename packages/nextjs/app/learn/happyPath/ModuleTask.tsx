import { useState } from "react";
import Image from "next/image";
import petImg from "../../../public/pet.png";
import { ModalNFT } from "~~/components/ModalNFT";
import { activityData } from "~~/data/activityData";

interface ModuleTaskProps {
  bgColor: string;
  textColor: string;
}
const ModuleTask = (props: ModuleTaskProps) => {
  const [isClicked, setIsClicked] = useState(false);
  const [openModal, setModal] = useState(false);

  const getLastTask = (id: number) => {
    if (id !== 5) return;
    setIsClicked(!isClicked);
    setTimeout(handleModal, 500);
  };
  const handleModal = () => {
    if (openModal) return;
    setModal(!openModal);
  };
  return (
    <div className="flex justify-center flex-wrap p-6 pt-3 max-w-[580px]">
      <Image src={petImg} alt="Pet" className="order-2 m-auto" />
      {activityData.map(activity => {
        const Icon = activity.icon;

        return (
          <div
            className={`flex justify-center mx-3 my-3 flex-col rounded-2xl items-center  text-darkGrey w-[150px] px-2 py-5 ${
              activity.id === 1 || isClicked ? props.bgColor : "bg-lightGrey"
            }`}
            key={activity.id}
            onClick={() => getLastTask(activity.id)}
          >
            <Icon size={40} />
            <p className={`bg-white p-1 mt-3 mb-0 rounded-md ${activity.id === 1 ? props.textColor : "text-darkGrey"}`}>
              Actividad {`${activity.id}`}
            </p>
          </div>
        );
      })}
      {openModal && <ModalNFT setModal={setModal} setIsClicked={setIsClicked} />}
    </div>
  );
};
export default ModuleTask;
