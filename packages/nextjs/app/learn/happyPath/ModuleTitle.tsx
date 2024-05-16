import { BsFileText } from "react-icons/bs";

interface TitleProps {
  num: string;
  subTitle: string;
  className: string;
}
const ModuleTitle = (props: TitleProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { num, subTitle, className } = props;
  return (
    <div className={className}>
      <div>
        <h4 className="font-bold font-[20px]">{`Módulo ${num}`}</h4>
        <p className="text-subP">{subTitle}</p>
      </div>
      <button className="flex items-center rounded-lg border-solid border-2 border-lightGrey self-center text-sm p-2">
        <BsFileText size={24} className="mr-2" /> GUÍA TEÓRICA
      </button>
    </div>
  );
};
export default ModuleTitle;
