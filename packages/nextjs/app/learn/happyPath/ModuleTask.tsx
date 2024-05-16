import Image from "next/image";
import petImg from "../../../public/pet.png";
import { activityData } from "~~/data/activityData";

const ModuleTask = () => {
  return (
    <div className="flex justify-center flex-wrap p-6 pt-3 max-w-[580px]">
      <Image src={petImg} alt="Pet" className="order-2 m-auto" />
      {activityData.map(activity => {
        const Icon = activity.icon;
        return (
          <div
            className={`"flex justify-center mx-3 my-3 flex-col rounded-2xl items-center bg-lightGrey text-darkGrey w-[150px] px-2 py-5  order-${activity.order}"`}
            key={activity.id}
          >
            <Icon size={40} />
            <p className="bg-white p-1 mt-3 mb-0 rounded-md">Actividad {`${activity.id}`}</p>
          </div>
        );
      })}
    </div>
  );
};
export default ModuleTask;
