import { activityData } from "~~/data/activityData";

const ModuleTask = () => {
  return (
    <div className="flex flex-wrap gap-4">
      {activityData.map(activity => {
        const Icon = activity.icon;
        return (
          <div className="flex flex-col items-center bg-lightGrey text-darkGrey w-1/3 p-2" key={activity.id}>
            <Icon size={40} />
            <p className="bg-white">Actividad {`${activity.id}`}</p>
          </div>
        );
      })}
    </div>
  );
};
export default ModuleTask;
